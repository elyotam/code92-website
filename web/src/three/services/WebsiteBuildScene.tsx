import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useSceneDisposal } from '../../hooks/useSceneDisposal';
import { createPanel } from './sceneUtils';

// A browser-window frame with a typography block, image panel, and code
// snippet that breathe in from scattered offsets into an assembled layout
// and back out — an ambient loop, not a one-shot reveal.
export function WebsiteBuildScene() {
  const groupRef = useRef<THREE.Group>(null);
  useSceneDisposal(groupRef);

  const { group, parts } = useMemo(() => {
    const g = new THREE.Group();

    const frame = createPanel({ width: 3.4, height: 2.2, fillOpacity: 0.3, edgeOpacity: 0.5 });
    frame.position.z = -0.05;
    g.add(frame);

    const typography = createPanel({ width: 1.4, height: 0.35 });
    const image = createPanel({ width: 1.0, height: 0.9 });
    const code = createPanel({ width: 0.9, height: 1.3, color: '#22d3ee' });

    g.add(typography, image, code);

    return {
      group: g,
      parts: {
        typography: { obj: typography, from: new THREE.Vector3(-2.6, 1.6, -1.2), to: new THREE.Vector3(-0.7, 0.75, 0.15) },
        image: { obj: image, from: new THREE.Vector3(2.4, -1.6, -1.5), to: new THREE.Vector3(0.9, 0.1, 0.2) },
        code: { obj: code, from: new THREE.Vector3(-2.2, -1.8, -1.8), to: new THREE.Vector3(-0.9, -0.4, 0.25) },
      },
    };
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const breathe = (Math.sin(t * 0.35) + 1) / 2; // 0..1..0, ambient loop
    Object.values(parts).forEach(({ obj, from, to }) => {
      obj.position.lerpVectors(from, to, 0.15 + breathe * 0.85);
    });
    if (groupRef.current) groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.12;
  });

  return (
    <group ref={groupRef}>
      <primitive object={group} />
    </group>
  );
}
