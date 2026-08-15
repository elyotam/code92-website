import { useEffect } from 'react';
import { hasWebGL } from '../utils/webgl';
import { useAppStore } from '../store/useAppStore';

/** Probes WebGL support once at boot and caches the result in the shared store. */
export function useWebGLSupport() {
  const webglSupported = useAppStore((s) => s.webglSupported);
  const setWebglSupported = useAppStore((s) => s.setWebglSupported);

  useEffect(() => {
    if (webglSupported === null) setWebglSupported(hasWebGL());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return webglSupported;
}
