// Generates the per-stage target positions for the hero particle field.
// Each stage returns a flat Float32Array (count * 3), indexed identically
// across stages so particle[i] always morphs from stage A's position to
// stage B's position — that continuity is what makes it read as one
// object "morphing" rather than particles teleporting.

export type StageKey = 'code' | 'interface' | 'website' | 'app' | 'components' | 'handoff';

// Scroll-progress bands each stage owns. Matches the plan's choreography.
export const STAGE_BOUNDS: Record<StageKey, [number, number]> = {
  code: [0, 0.15],
  interface: [0.15, 0.35],
  website: [0.35, 0.55],
  app: [0.55, 0.75],
  components: [0.75, 0.9],
  handoff: [0.9, 1],
};

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function codeStage(count: number): Float32Array {
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = rand(-3.6, 3.6);
    pos[i * 3 + 1] = rand(-2.2, 2.2);
    pos[i * 3 + 2] = rand(-2.5, 1.5);
  }
  return pos;
}

// Returns both the grid target positions and the neighbor index-pairs used
// to draw the thin "connecting lines" effect (right + below neighbor only,
// so each interior cell contributes at most 2 lines — keeps the line count
// proportional to particle count instead of quadratic).
function interfaceStage(count: number): { positions: Float32Array; linePairs: [number, number][] } {
  const cols = Math.round(Math.sqrt(count * (5 / 3.2)));
  const rows = Math.ceil(count / cols);
  const width = 5;
  const height = 3.2;
  const pos = new Float32Array(count * 3);
  const linePairs: [number, number][] = [];

  for (let i = 0; i < count; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = (col / (cols - 1) - 0.5) * width;
    const y = (0.5 - row / (rows - 1)) * height;
    pos[i * 3] = x;
    pos[i * 3 + 1] = y;
    pos[i * 3 + 2] = 0;

    const rightIndex = row * cols + col + 1;
    if (col < cols - 1 && rightIndex < count) linePairs.push([i, rightIndex]);
    const belowIndex = (row + 1) * cols + col;
    if (belowIndex < count) linePairs.push([i, belowIndex]);
  }

  return { positions: pos, linePairs };
}

// Splits particles into a nav strip, a hero block, and three content
// columns — the "website interface materializing" beat. Each region gets
// a slightly different z so the panels visibly separate in depth.
function websiteStage(count: number): Float32Array {
  const pos = new Float32Array(count * 3);
  const navCount = Math.round(count * 0.1);
  const heroCount = Math.round(count * 0.35);
  const colCount = count - navCount - heroCount;
  const perCol = Math.ceil(colCount / 3);

  let i = 0;
  for (let n = 0; n < navCount; n++, i++) {
    pos[i * 3] = rand(-2.4, 2.4);
    pos[i * 3 + 1] = rand(1.5, 1.75);
    pos[i * 3 + 2] = 0.4;
  }
  for (let n = 0; n < heroCount; n++, i++) {
    pos[i * 3] = rand(-2.2, 2.2);
    pos[i * 3 + 1] = rand(0.3, 1.2);
    pos[i * 3 + 2] = 0.1;
  }
  for (let c = 0; c < 3 && i < count; c++) {
    const colX = (c - 1) * 1.7;
    for (let n = 0; n < perCol && i < count; n++, i++) {
      pos[i * 3] = colX + rand(-0.5, 0.5);
      pos[i * 3 + 1] = rand(-1.6, -0.1);
      pos[i * 3 + 2] = -0.2 - c * 0.15;
    }
  }
  return pos;
}

// Reflows into a narrow, tall phone-aspect group with two stacked "screens"
// offset in z — the website -> app beat.
function appStage(count: number): Float32Array {
  const pos = new Float32Array(count * 3);
  const screenSplit = Math.round(count * 0.5);
  for (let i = 0; i < count; i++) {
    const onSecondScreen = i >= screenSplit;
    const localIndex = onSecondScreen ? i - screenSplit : i;
    const localCount = onSecondScreen ? count - screenSplit : screenSplit;
    const t = localIndex / Math.max(1, localCount - 1);
    pos[i * 3] = rand(-0.9, 0.9);
    pos[i * 3 + 1] = (0.5 - t) * 4.2 + (onSecondScreen ? 0 : 0.4);
    pos[i * 3 + 2] = onSecondScreen ? -0.9 : 0.3;
  }
  return pos;
}

// Explodes into ~7 clustered "module" nodes (API/DB/cloud-style components).
function componentsStage(count: number, clusterCount = 7): { positions: Float32Array; centers: [number, number, number][] } {
  const pos = new Float32Array(count * 3);
  const centers: [number, number, number][] = Array.from({ length: clusterCount }, () => [
    rand(-3.2, 3.2),
    rand(-2, 2),
    rand(-1.5, 1.5),
  ]);

  for (let i = 0; i < count; i++) {
    const [cx, cy, cz] = centers[i % clusterCount];
    pos[i * 3] = cx + rand(-0.35, 0.35);
    pos[i * 3 + 1] = cy + rand(-0.35, 0.35);
    pos[i * 3 + 2] = cz + rand(-0.35, 0.35);
  }
  return { positions: pos, centers };
}

export type ParticleStages = {
  count: number;
  code: Float32Array;
  interfaceGrid: Float32Array;
  interfaceLinePairs: [number, number][];
  website: Float32Array;
  app: Float32Array;
  components: Float32Array;
  clusterCenters: [number, number, number][];
};

export function buildParticleStages(count: number): ParticleStages {
  const { positions: interfaceGrid, linePairs: interfaceLinePairs } = interfaceStage(count);
  const { positions: components, centers: clusterCenters } = componentsStage(count);
  return {
    count,
    code: codeStage(count),
    interfaceGrid,
    interfaceLinePairs,
    website: websiteStage(count),
    app: appStage(count),
    components,
    clusterCenters,
  };
}

/** Clamped smoothstep of `p` remapped into [start, end]. */
export function band(p: number, start: number, end: number): number {
  if (end === start) return p >= end ? 1 : 0;
  const t = Math.min(1, Math.max(0, (p - start) / (end - start)));
  return t * t * (3 - 2 * t);
}
