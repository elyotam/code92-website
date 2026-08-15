/** Heuristic for reducing 3D scene budget (particle count, disabling bloom), not for skipping WebGL entirely. */
export function isLowEndOrMobile(): boolean {
  const isNarrow = window.matchMedia('(max-width: 767px)').matches;
  const lowCores =
    typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency < 4;
  const lowMemory =
    'deviceMemory' in navigator && (navigator as { deviceMemory?: number }).deviceMemory !== undefined
      ? (navigator as { deviceMemory?: number }).deviceMemory! < 4
      : false;
  return isNarrow || lowCores || lowMemory;
}
