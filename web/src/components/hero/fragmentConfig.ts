import type { ComponentType } from 'react';
import {
  AutomationFragment,
  BrowserFragment,
  CommerceFragment,
  DataFragment,
  MobileFragment,
  TypeAccentFragment,
} from './fragments/Fragments';

export type FragmentState = {
  x: number;
  y: number;
  z: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  scale: number;
  opacity: number;
  blur: number;
};

export type FragmentConfig = {
  id: string;
  Component: ComponentType<Record<string, never>>;
  /** Staggers this fragment's own build sub-band within the shared assembly range. */
  staggerOffset: number;
  scattered: FragmentState;
  assembled: FragmentState;
};

// Hand-placed composition — desktop only (mobile gets its own simpler
// scene). Values are creative-direction choices: browser fragment reads
// as the "lead" piece near center, the rest surround it at varying depth,
// several extending toward/past typical viewport edges in the scattered
// state for scale, per the brief.
export const fragments: FragmentConfig[] = [
  {
    id: 'browser',
    Component: BrowserFragment,
    staggerOffset: 0,
    scattered: { x: -300, y: -30, z: -320, rotateX: 8, rotateY: -26, rotateZ: -2, scale: 0.88, opacity: 0.45, blur: 10 },
    assembled: { x: -230, y: -50, z: 30, rotateX: 2, rotateY: -9, rotateZ: 0, scale: 1, opacity: 1, blur: 0 },
  },
  {
    id: 'mobile',
    Component: MobileFragment,
    staggerOffset: 0.05,
    scattered: { x: 340, y: 140, z: -220, rotateX: -6, rotateY: 30, rotateZ: 3, scale: 0.82, opacity: 0.4, blur: 10 },
    assembled: { x: 270, y: 30, z: 90, rotateX: -2, rotateY: 15, rotateZ: 0, scale: 1, opacity: 1, blur: 0 },
  },
  {
    id: 'commerce',
    Component: CommerceFragment,
    staggerOffset: 0.1,
    scattered: { x: -420, y: 240, z: -180, rotateX: 10, rotateY: 18, rotateZ: -3, scale: 0.78, opacity: 0.38, blur: 9 },
    assembled: { x: -300, y: 210, z: -30, rotateX: 3, rotateY: 9, rotateZ: 0, scale: 0.95, opacity: 1, blur: 0 },
  },
  {
    id: 'data',
    Component: DataFragment,
    staggerOffset: 0.15,
    scattered: { x: 140, y: -280, z: -260, rotateX: -14, rotateY: -12, rotateZ: 3, scale: 0.82, opacity: 0.38, blur: 10 },
    assembled: { x: 40, y: -220, z: 0, rotateX: -3, rotateY: -6, rotateZ: 0, scale: 1, opacity: 1, blur: 0 },
  },
  {
    id: 'automation',
    Component: AutomationFragment,
    staggerOffset: 0.2,
    scattered: { x: 380, y: -160, z: -200, rotateX: 6, rotateY: 24, rotateZ: 2, scale: 0.8, opacity: 0.38, blur: 9 },
    assembled: { x: 290, y: -180, z: 50, rotateX: 1, rotateY: 12, rotateZ: 0, scale: 1, opacity: 1, blur: 0 },
  },
  {
    id: 'type',
    Component: TypeAccentFragment,
    staggerOffset: 0.25,
    scattered: { x: 0, y: 0, z: -450, rotateX: 0, rotateY: 0, rotateZ: 0, scale: 1.5, opacity: 0.08, blur: 3 },
    assembled: { x: 90, y: 270, z: -80, rotateX: 0, rotateY: -8, rotateZ: 0, scale: 1, opacity: 0.22, blur: 0 },
  },
];
