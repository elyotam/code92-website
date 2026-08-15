import { useEffect, type RefObject } from 'react';
import type * as THREE from 'three';
import { disposeObject3D } from '../three/services/sceneUtils';

/** Disposes an imperatively-built three.js group on unmount (R3F's own cleanup only covers JSX-declared objects). */
export function useSceneDisposal(groupRef: RefObject<THREE.Object3D | null>) {
  useEffect(() => {
    return () => {
      if (groupRef.current) disposeObject3D(groupRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
