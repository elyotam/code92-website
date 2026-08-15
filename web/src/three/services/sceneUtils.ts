import * as THREE from 'three';

export const BRAND_GREEN = '#00e676';

/** A translucent glass-flavored rectangle with a glowing edge outline — the one panel primitive every service scene reuses. */
export function createPanel({
  width,
  height,
  color = BRAND_GREEN,
  fillOpacity = 0.55,
  edgeOpacity = 0.8,
}: {
  width: number;
  height: number;
  color?: string;
  fillOpacity?: number;
  edgeOpacity?: number;
}): THREE.Group {
  const group = new THREE.Group();

  const fillGeom = new THREE.PlaneGeometry(width, height);
  const fillMat = new THREE.MeshBasicMaterial({
    color: '#111116',
    transparent: true,
    opacity: fillOpacity,
    side: THREE.DoubleSide,
  });
  group.add(new THREE.Mesh(fillGeom, fillMat));

  const edgesGeom = new THREE.EdgesGeometry(fillGeom);
  const edgesMat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: edgeOpacity });
  group.add(new THREE.LineSegments(edgesGeom, edgesMat));

  return group;
}

/** A small glowing node — used by the custom-products graph scene. */
export function createNode(radius = 0.14, color = BRAND_GREEN): THREE.Mesh {
  const geom = new THREE.SphereGeometry(radius, 16, 16);
  const mat = new THREE.MeshBasicMaterial({ color });
  return new THREE.Mesh(geom, mat);
}

/** Small canvas-texture text label (always LTR/English — technical terms don't localize, same convention as the code-motif background). */
export function createLabelSprite(text: string, color = BRAND_GREEN): THREE.Sprite {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 72;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = 'rgba(17,17,22,0.85)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.strokeRect(1.5, 1.5, canvas.width - 3, canvas.height - 3);
  ctx.font = '600 30px monospace';
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(1.3, 0.37, 1);
  return sprite;
}

/** Disposes every geometry/material/texture under `obj` — for objects built imperatively outside JSX, which R3F's own unmount cleanup doesn't reach. */
export function disposeObject3D(obj: THREE.Object3D) {
  obj.traverse((child) => {
    const mesh = child as THREE.Mesh;
    if (mesh.geometry) mesh.geometry.dispose();
    const mat = mesh.material as THREE.Material | THREE.Material[] | undefined;
    if (mat) {
      const materials = Array.isArray(mat) ? mat : [mat];
      materials.forEach((m) => {
        const withMap = m as THREE.Material & { map?: THREE.Texture | null };
        withMap.map?.dispose();
        m.dispose();
      });
    }
  });
}
