import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { getDotTexture } from '../shared/dotTexture';

const COUNT = 140;
const BRAND_GREEN = '#00e676';

// Ambient chrome only — slow floating dust behind the whole projects
// section, one shared canvas instead of a scene per card, per the plan's
// "reserve WebGL for ambient chrome, not per-project rendering" call.
export function AmbientDustScene() {
  const pointsRef = useRef<THREE.Points>(null);
  const seeds = useMemo(
    () =>
      Array.from({ length: COUNT }, () => ({
        x: (Math.random() - 0.5) * 9,
        y: (Math.random() - 0.5) * 5,
        z: (Math.random() - 0.5) * 3,
        speed: 0.15 + Math.random() * 0.25,
        phase: Math.random() * Math.PI * 2,
      })),
    []
  );
  const positions = useMemo(() => new Float32Array(COUNT * 3), []);

  useFrame(({ clock }) => {
    const geom = pointsRef.current?.geometry;
    const posAttr = geom?.getAttribute('position') as THREE.BufferAttribute | undefined;
    if (!posAttr) return;
    const t = clock.getElapsedTime();
    seeds.forEach((s, i) => {
      posAttr.setXYZ(i, s.x + Math.sin(t * s.speed + s.phase) * 0.3, s.y + Math.cos(t * s.speed * 0.8 + s.phase) * 0.2, s.z);
    });
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={BRAND_GREEN}
        size={0.05}
        map={getDotTexture()}
        transparent
        opacity={0.5}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}
