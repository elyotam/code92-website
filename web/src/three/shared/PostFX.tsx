import { EffectComposer, Bloom } from '@react-three/postprocessing';

/**
 * Bloom only — deliberately no DepthOfField/Bokeh (a common cause of
 * perceived input lag on integrated GPUs, not worth it for a mostly
 * straight-on scene). `intensity` is lower for service mini-scenes than
 * the hero so secondary moments don't out-glow the main one.
 */
export function PostFX({ intensity = 1.1 }: { intensity?: number }) {
  return (
    <EffectComposer>
      <Bloom luminanceThreshold={0.15} luminanceSmoothing={0.9} intensity={intensity} mipmapBlur />
    </EffectComposer>
  );
}
