import { useFrame } from '@react-three/fiber';
import { useMemo, useRef, type MutableRefObject } from 'react';
import * as THREE from 'three';
import { CameraRig } from '../shared/CameraRig';
import { PostFX } from '../shared/PostFX';
import { getDotTexture } from '../shared/dotTexture';
import { band, buildParticleStages, STAGE_BOUNDS } from './particleStages';

const BRAND_GREEN = '#00e676';

export function HeroScene({
  progressRef,
  pointerRef,
  particleCount,
  enableBloom = true,
}: {
  progressRef: MutableRefObject<number>;
  pointerRef: MutableRefObject<{ x: number; y: number }>;
  particleCount: number;
  enableBloom?: boolean;
}) {
  const stages = useMemo(() => buildParticleStages(particleCount), [particleCount]);
  const pointsRef = useRef<THREE.Points>(null);
  const pointsMaterialRef = useRef<THREE.PointsMaterial>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const linesMaterialRef = useRef<THREE.LineBasicMaterial>(null);
  const clockRef = useRef(0);

  const positions = useMemo(() => new Float32Array(particleCount * 3), [particleCount]);
  const linePositions = useMemo(() => {
    const arr = new Float32Array(stages.interfaceLinePairs.length * 2 * 3);
    stages.interfaceLinePairs.forEach(([a, b], i) => {
      arr[i * 6] = stages.interfaceGrid[a * 3];
      arr[i * 6 + 1] = stages.interfaceGrid[a * 3 + 1];
      arr[i * 6 + 2] = stages.interfaceGrid[a * 3 + 2];
      arr[i * 6 + 3] = stages.interfaceGrid[b * 3];
      arr[i * 6 + 4] = stages.interfaceGrid[b * 3 + 1];
      arr[i * 6 + 5] = stages.interfaceGrid[b * 3 + 2];
    });
    return arr;
  }, [stages]);

  useFrame((_, delta) => {
    clockRef.current += delta;
    const p = progressRef.current;
    const geom = pointsRef.current?.geometry;
    const posAttr = geom?.getAttribute('position') as THREE.BufferAttribute | undefined;
    if (!geom || !posAttr) return;

    const jitterAmp = 0.12 * (1 - band(p, 0, 0.3)) + 0.05 * band(p, 0.75, 1);
    const t = clockRef.current;

    for (let i = 0; i < particleCount; i++) {
      let x: number, y: number, z: number;

      if (p <= STAGE_BOUNDS.interface[0]) {
        x = stages.code[i * 3];
        y = stages.code[i * 3 + 1];
        z = stages.code[i * 3 + 2];
      } else if (p <= STAGE_BOUNDS.interface[1]) {
        const bl = band(p, STAGE_BOUNDS.interface[0], STAGE_BOUNDS.interface[1]);
        x = THREE.MathUtils.lerp(stages.code[i * 3], stages.interfaceGrid[i * 3], bl);
        y = THREE.MathUtils.lerp(stages.code[i * 3 + 1], stages.interfaceGrid[i * 3 + 1], bl);
        z = THREE.MathUtils.lerp(stages.code[i * 3 + 2], stages.interfaceGrid[i * 3 + 2], bl);
      } else if (p <= STAGE_BOUNDS.website[1]) {
        const bl = band(p, STAGE_BOUNDS.website[0], STAGE_BOUNDS.website[1]);
        x = THREE.MathUtils.lerp(stages.interfaceGrid[i * 3], stages.website[i * 3], bl);
        y = THREE.MathUtils.lerp(stages.interfaceGrid[i * 3 + 1], stages.website[i * 3 + 1], bl);
        z = THREE.MathUtils.lerp(stages.interfaceGrid[i * 3 + 2], stages.website[i * 3 + 2], bl);
      } else if (p <= STAGE_BOUNDS.app[1]) {
        const bl = band(p, STAGE_BOUNDS.app[0], STAGE_BOUNDS.app[1]);
        x = THREE.MathUtils.lerp(stages.website[i * 3], stages.app[i * 3], bl);
        y = THREE.MathUtils.lerp(stages.website[i * 3 + 1], stages.app[i * 3 + 1], bl);
        z = THREE.MathUtils.lerp(stages.website[i * 3 + 2], stages.app[i * 3 + 2], bl);
      } else if (p <= STAGE_BOUNDS.components[1]) {
        const bl = band(p, STAGE_BOUNDS.components[0], STAGE_BOUNDS.components[1]);
        x = THREE.MathUtils.lerp(stages.app[i * 3], stages.components[i * 3], bl);
        y = THREE.MathUtils.lerp(stages.app[i * 3 + 1], stages.components[i * 3 + 1], bl);
        z = THREE.MathUtils.lerp(stages.app[i * 3 + 2], stages.components[i * 3 + 2], bl);
      } else {
        const bl = band(p, STAGE_BOUNDS.handoff[0], STAGE_BOUNDS.handoff[1]);
        const scale = 1 + bl * 1.8;
        x = stages.components[i * 3] * scale;
        y = stages.components[i * 3 + 1] * scale;
        z = stages.components[i * 3 + 2] * scale;
      }

      // Organic drift, damped as the shape "settles" into a formed stage.
      x += Math.sin(t * 0.6 + i) * jitterAmp * 0.4;
      y += Math.cos(t * 0.5 + i * 1.3) * jitterAmp * 0.4;
      z += Math.sin(t * 0.4 + i * 0.7) * jitterAmp * 0.3;

      posAttr.setXYZ(i, x, y, z);
    }
    posAttr.needsUpdate = true;

    if (pointsMaterialRef.current) {
      pointsMaterialRef.current.opacity = 1 - band(p, STAGE_BOUNDS.handoff[0], STAGE_BOUNDS.handoff[1]);
    }
    if (linesMaterialRef.current) {
      const fadeIn = band(p, 0.12, 0.3);
      const fadeOut = 1 - band(p, 0.42, 0.58);
      linesMaterialRef.current.opacity = Math.min(fadeIn, fadeOut) * 0.35;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = Math.sin(t * 0.05) * 0.05;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 2, 4]} color={BRAND_GREEN} intensity={12} distance={12} />

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial ref={linesMaterialRef} color={BRAND_GREEN} transparent opacity={0} />
      </lineSegments>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          ref={pointsMaterialRef}
          color={BRAND_GREEN}
          size={0.07}
          map={getDotTexture()}
          transparent
          opacity={1}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>

      <CameraRig
        progressRef={progressRef}
        pointerRef={pointerRef}
        dollyZ={(p) => THREE.MathUtils.lerp(6, 4, band(p, 0, 0.9))}
        orbitYaw={(p) => Math.sin(p * Math.PI) * 0.15}
      />
      {enableBloom && <PostFX intensity={1.1} />}
    </>
  );
}
