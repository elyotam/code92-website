import { useFrame, useThree } from '@react-three/fiber';
import type { MutableRefObject } from 'react';
import { damp } from './damp';

/**
 * Shared by the hero and every service mini-scene: pointer-parallax camera
 * tilt, composing additively with an optional scroll-driven dolly/orbit
 * (hero only — service scenes pass a constant `dollyZ`/no scroll drama).
 */
export function CameraRig({
  progressRef,
  pointerRef,
  dollyZ = () => 4,
  orbitYaw = () => 0,
  maxPointerYaw = 0.12,
  maxPointerPitch = 0.08,
}: {
  progressRef?: MutableRefObject<number>;
  pointerRef?: MutableRefObject<{ x: number; y: number }>;
  dollyZ?: (progress: number) => number;
  orbitYaw?: (progress: number) => number;
  maxPointerYaw?: number;
  maxPointerPitch?: number;
}) {
  const { camera } = useThree();

  useFrame((_, delta) => {
    const progress = progressRef?.current ?? 0;
    const pointer = pointerRef?.current ?? { x: 0, y: 0 };

    const targetZ = dollyZ(progress);
    const targetYaw = orbitYaw(progress) + pointer.x * maxPointerYaw;
    const targetPitch = pointer.y * maxPointerPitch;

    camera.position.z = damp(camera.position.z, targetZ, 4, delta);
    camera.rotation.y = damp(camera.rotation.y, targetYaw, 4, delta);
    camera.rotation.x = damp(camera.rotation.x, targetPitch, 4, delta);
  });

  return null;
}
