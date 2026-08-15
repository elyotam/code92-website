import { Canvas } from '@react-three/fiber';
import { useMemo, type MutableRefObject } from 'react';
import { HeroScene } from '../../three/hero/HeroScene';
import { isLowEndOrMobile } from '../../utils/device';

export function HeroCanvas({
  progressRef,
  pointerRef,
}: {
  progressRef: MutableRefObject<number>;
  pointerRef: MutableRefObject<{ x: number; y: number }>;
}) {
  const lowEnd = useMemo(() => isLowEndOrMobile(), []);

  return (
    <Canvas
      dpr={[1, Math.min(window.devicePixelRatio, 2)]}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 6], fov: 45, near: 0.1, far: 50 }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <color attach="background" args={['#060608']} />
      <HeroScene
        progressRef={progressRef}
        pointerRef={pointerRef}
        particleCount={lowEnd ? 450 : 900}
        enableBloom={!lowEnd}
      />
    </Canvas>
  );
}
