import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useSceneDisposal } from '../../hooks/useSceneDisposal';
import { createPanel } from './sceneUtils';

// A nav rail + a data panel drifting gently in depth; the data panel's
// inner "content" strip periodically swaps width/opacity to suggest a
// live app state change, without any invented numbers on it.
export function AppScreensScene() {
  const groupRef = useRef<THREE.Group>(null);
  useSceneDisposal(groupRef);

  const { group, navRail, dataPanel, innerStrip } = useMemo(() => {
    const g = new THREE.Group();

    const navRail = createPanel({ width: 0.7, height: 2.1 });
    navRail.position.set(-1.3, 0, 0);
    g.add(navRail);

    const dataPanel = createPanel({ width: 2.0, height: 1.5 });
    dataPanel.position.set(0.9, 0.2, -0.2);
    g.add(dataPanel);

    const innerStrip = createPanel({ width: 1.5, height: 0.3, color: '#22d3ee', fillOpacity: 0.4 });
    innerStrip.position.set(0.9, 0.2, -0.1);
    g.add(innerStrip);

    return { group: g, navRail, dataPanel, innerStrip };
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    navRail.position.y = Math.sin(t * 0.4) * 0.15;
    dataPanel.position.y = 0.2 + Math.cos(t * 0.3) * 0.12;
    dataPanel.rotation.y = Math.sin(t * 0.2) * 0.1;

    const swap = (Math.sin(t * 0.6) + 1) / 2;
    innerStrip.position.y = dataPanel.position.y + 0.35 - swap * 0.5;
    innerStrip.scale.x = 0.6 + swap * 0.4;

    if (groupRef.current) groupRef.current.rotation.y = Math.sin(t * 0.12) * 0.1;
  });

  return (
    <group ref={groupRef}>
      <primitive object={group} />
    </group>
  );
}
