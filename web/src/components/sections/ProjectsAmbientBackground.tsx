import { Canvas } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { useInView } from '../../hooks/useInView';
import { useAppStore } from '../../store/useAppStore';
import { AmbientDustScene } from '../../three/projects/AmbientDustScene';
import { isLowEndOrMobile } from '../../utils/device';
import styles from './ProjectsAmbientBackground.module.css';

export function ProjectsAmbientBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const webglSupported = useAppStore((s) => s.webglSupported);
  const reducedMotion = useAppStore((s) => s.reducedMotion);
  const lowEnd = useMemo(() => isLowEndOrMobile(), []);
  const canUse3D = webglSupported === true && !reducedMotion && !lowEnd;

  return (
    <div ref={ref} className={styles.bg} aria-hidden="true">
      {inView && canUse3D && (
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 40 }} gl={{ antialias: true, alpha: true }}>
          <AmbientDustScene />
        </Canvas>
      )}
    </div>
  );
}
