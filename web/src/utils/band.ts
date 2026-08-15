/** Clamped smoothstep of `p` remapped into [start, end] — the one interpolation primitive the Hero's scroll choreography is built on. */
export function band(p: number, start: number, end: number): number {
  if (end === start) return p >= end ? 1 : 0;
  const t = Math.min(1, Math.max(0, (p - start) / (end - start)));
  return t * t * (3 - 2 * t);
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}
