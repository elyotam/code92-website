import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useSceneDisposal } from '../../hooks/useSceneDisposal';
import { createPanel } from './sceneUtils';

// 3 tall phone-aspect frames orbiting a shared center, each with an inner
// "screen content" block that swaps on its own phase offset — reads as
// multiple app screens/flows in motion.
export function MobileDeviceScene() {
  const groupRef = useRef<THREE.Group>(null);
  useSceneDisposal(groupRef);

  const phones = useMemo(() => {
    const g = new THREE.Group();
    const count = 3;
    const colors = ['#00e676', '#22d3ee', '#00e676'];
    const items = Array.from({ length: count }, (_, i) => {
      const frame = createPanel({ width: 0.85, height: 1.7, color: colors[i] });
      const inner = createPanel({ width: 0.6, height: 0.5, color: colors[i], fillOpacity: 0.4 });
      g.add(frame, inner);
      return { frame, inner, phase: (i / count) * Math.PI * 2 };
    });
    return { group: g, items };
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    phones.items.forEach(({ frame, inner, phase }, i) => {
      const angle = t * 0.25 + phase;
      const radius = 1.5;
      frame.position.set(Math.cos(angle) * radius, Math.sin(t * 0.3 + phase) * 0.4, Math.sin(angle) * radius * 0.6 - 0.3);
      frame.rotation.y = -angle * 0.5;

      const swap = (Math.sin(t * 0.5 + i * 2) + 1) / 2;
      inner.position.copy(frame.position);
      inner.position.y += 0.3 - swap * 0.6;
      inner.rotation.y = frame.rotation.y;
      inner.visible = swap > 0.15;
    });
    if (groupRef.current) groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.1;
  });

  return (
    <group ref={groupRef}>
      <primitive object={phones.group} />
    </group>
  );
}
