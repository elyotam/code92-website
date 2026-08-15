import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useSceneDisposal } from '../../hooks/useSceneDisposal';
import { createLabelSprite, createNode, BRAND_GREEN } from './sceneUtils';

const NODES = [
  { label: 'API', pos: new THREE.Vector3(-1.6, 0.9, 0) },
  { label: 'DB', pos: new THREE.Vector3(1.6, 0.9, -0.3) },
  { label: 'cloud', pos: new THREE.Vector3(0, -1.1, 0.2) },
  { label: 'module', pos: new THREE.Vector3(-1.4, -0.9, -0.4) },
  { label: 'module', pos: new THREE.Vector3(1.5, -0.8, 0.1) },
];
const CENTER = new THREE.Vector3(0, 0.1, 0);

export function ApiCloudScene() {
  const groupRef = useRef<THREE.Group>(null);
  useSceneDisposal(groupRef);

  const scene = useMemo(() => {
    const g = new THREE.Group();
    const centerNode = createNode(0.18);
    centerNode.position.copy(CENTER);
    g.add(centerNode);

    const nodes = NODES.map(({ label, pos }) => {
      const node = createNode(0.12);
      node.position.copy(pos);
      const sprite = createLabelSprite(label);
      sprite.position.copy(pos).add(new THREE.Vector3(0, 0.32, 0));
      g.add(node, sprite);
      return { node, sprite, pos };
    });

    const edgeMat = new THREE.LineBasicMaterial({ color: BRAND_GREEN, transparent: true, opacity: 0.3 });
    const pulseMat = new THREE.MeshBasicMaterial({ color: BRAND_GREEN });
    const pulses = NODES.map(({ pos }) => {
      const edgeGeom = new THREE.BufferGeometry().setFromPoints([CENTER, pos]);
      g.add(new THREE.Line(edgeGeom, edgeMat));

      const pulse = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), pulseMat);
      g.add(pulse);
      return { pulse, from: CENTER, to: pos };
    });

    return { group: g, nodes, pulses, centerNode };
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    scene.pulses.forEach(({ pulse, from, to }, i) => {
      const cycle = (t * 0.4 + i * 0.2) % 1;
      pulse.position.lerpVectors(from, to, cycle);
      pulse.scale.setScalar(1 - Math.abs(cycle - 0.5) * 0.6);
    });
    scene.centerNode.scale.setScalar(1 + Math.sin(t * 1.5) * 0.08);
    if (groupRef.current) groupRef.current.rotation.y = t * 0.08;
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene.group} />
    </group>
  );
}
