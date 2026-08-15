import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useSceneDisposal } from '../../hooks/useSceneDisposal';
import { createPanel } from './sceneUtils';

// Product-grid, cart, checkout, and confirmation panels breathing from
// scattered positions into a 2x2 storefront layout. No numbers/currency
// on any panel — generic blocks only, per the no-fabrication rule.
export function EcommerceAssemblyScene() {
  const groupRef = useRef<THREE.Group>(null);
  useSceneDisposal(groupRef);

  const { group, parts } = useMemo(() => {
    const g = new THREE.Group();

    const productGrid = createPanel({ width: 1.5, height: 1.2 });
    const cart = createPanel({ width: 1.1, height: 0.9, color: '#22d3ee' });
    const checkout = createPanel({ width: 1.1, height: 0.9 });
    const confirmation = createPanel({ width: 1.5, height: 0.5, color: '#a3e635' });

    g.add(productGrid, cart, checkout, confirmation);

    return {
      group: g,
      parts: {
        productGrid: { obj: productGrid, from: new THREE.Vector3(-2.8, 1.8, -1.5), to: new THREE.Vector3(-0.85, 0.55, 0) },
        cart: { obj: cart, from: new THREE.Vector3(2.6, 1.6, -1.2), to: new THREE.Vector3(0.65, 0.55, 0.15) },
        checkout: { obj: checkout, from: new THREE.Vector3(-2.4, -1.8, -1.8), to: new THREE.Vector3(-0.65, -0.55, 0.15) },
        confirmation: { obj: confirmation, from: new THREE.Vector3(2.2, -1.6, -1.3), to: new THREE.Vector3(0.85, -0.75, 0.25) },
      },
    };
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const breathe = (Math.sin(t * 0.3) + 1) / 2;
    Object.values(parts).forEach(({ obj, from, to }) => {
      obj.position.lerpVectors(from, to, 0.15 + breathe * 0.85);
    });
    if (groupRef.current) groupRef.current.rotation.y = Math.sin(t * 0.14) * 0.12;
  });

  return (
    <group ref={groupRef}>
      <primitive object={group} />
    </group>
  );
}
