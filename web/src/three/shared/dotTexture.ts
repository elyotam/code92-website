import * as THREE from 'three';

let cached: THREE.CanvasTexture | null = null;

/** A small radial-gradient dot, used as the particle sprite (no external asset). */
export function getDotTexture(): THREE.CanvasTexture {
  if (cached) return cached;
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.4, 'rgba(200,255,225,0.8)');
  gradient.addColorStop(1, 'rgba(0,230,118,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  cached = new THREE.CanvasTexture(canvas);
  return cached;
}
