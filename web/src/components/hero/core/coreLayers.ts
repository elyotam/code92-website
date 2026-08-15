import type { ComponentType } from 'react';
import { AppIcon, AutomationIcon, CommerceIcon, SystemIcon, WebsiteIcon } from './icons';

export type CoreLayer = {
  id: string;
  Icon: ComponentType<{ className?: string }>;
  label: string;
  accent: 'signal' | 'cyan' | 'violet';
};

// One uniform system, five layers — deliberately identical size/shape so
// the composition reads as one constructed object, not five competing
// cards. Order = stack order (index 0 = frontmost in the fan).
export const coreLayers: CoreLayer[] = [
  { id: 'website', Icon: WebsiteIcon, label: 'WEBSITE', accent: 'signal' },
  { id: 'app', Icon: AppIcon, label: 'MOBILE APP', accent: 'cyan' },
  { id: 'commerce', Icon: CommerceIcon, label: 'COMMERCE', accent: 'signal' },
  { id: 'system', Icon: SystemIcon, label: 'SYSTEM', accent: 'violet' },
  { id: 'automation', Icon: AutomationIcon, label: 'AUTOMATION', accent: 'signal' },
];
