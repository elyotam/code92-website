import { Canvas } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { useInView } from '../../hooks/useInView';
import { usePointer } from '../../hooks/usePointer';
import type { Service } from '../../content/services';
import { useAppStore } from '../../store/useAppStore';
import { serviceScenes } from '../../three/services';
import { CameraRig } from '../../three/shared/CameraRig';
import { PostFX } from '../../three/shared/PostFX';
import { isLowEndOrMobile } from '../../utils/device';
import { GlassCard } from '../ui/GlassCard';
import styles from './ServiceShowcase.module.css';

export function ServiceShowcase({ service }: { service: Service }) {
  const locale = useAppStore((s) => s.locale);
  const webglSupported = useAppStore((s) => s.webglSupported);
  const reducedMotion = useAppStore((s) => s.reducedMotion);
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef);
  const pointerRef = usePointer();
  const lowEnd = useMemo(() => isLowEndOrMobile(), []);
  const canUse3D = webglSupported === true && !reducedMotion;
  const SceneComponent = serviceScenes[service.sceneId];

  return (
    <div ref={cardRef}>
      <GlassCard variant="card">
        <div className={styles.visual}>
          {inView && canUse3D ? (
            <Canvas
              dpr={[1, Math.min(window.devicePixelRatio, 2)]}
              camera={{ position: [0, 0, 4.5], fov: 40 }}
              gl={{ antialias: true }}
            >
              <color attach="background" args={['#0b0b10']} />
              <SceneComponent />
              <CameraRig pointerRef={pointerRef} dollyZ={() => 4.5} maxPointerYaw={0.08} maxPointerPitch={0.05} />
              {!lowEnd && <PostFX intensity={0.6} />}
            </Canvas>
          ) : (
            <div className={styles.visualFallback} aria-hidden="true" />
          )}
        </div>
        <h3 className={styles.title}>{service.title[locale]}</h3>
        <p className={styles.desc}>{service.description[locale]}</p>
      </GlassCard>
    </div>
  );
}
