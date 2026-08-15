type IconProps = { className?: string };

const common = {
  viewBox: '0 0 24 24',
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function WebsiteIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className} aria-hidden="true">
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="M3 8.5h18" />
      <circle cx="6" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="8.4" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      <path d="M7 12.5h10M7 15.5h6" />
    </svg>
  );
}

export function AppIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className} aria-hidden="true">
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.6" />
      <path d="M10 19h4" />
      <path d="M9.5 7.5h5M9.5 10.5h5M9.5 13.5h3" />
    </svg>
  );
}

export function CommerceIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className} aria-hidden="true">
      <circle cx="9.5" cy="20" r="1" fill="currentColor" stroke="none" />
      <circle cx="17.5" cy="20" r="1" fill="currentColor" stroke="none" />
      <path d="M3.5 4h2.2l2.1 11.2a2 2 0 0 0 2 1.6h7.4a2 2 0 0 0 1.96-1.6L20.5 8H6.4" />
    </svg>
  );
}

export function SystemIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className} aria-hidden="true">
      <rect x="4" y="3.5" width="16" height="6" rx="1.6" />
      <rect x="4" y="14.5" width="16" height="6" rx="1.6" />
      <circle cx="7.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="7.5" cy="17.5" r="0.6" fill="currentColor" stroke="none" />
      <path d="M9.8 6.5h7M9.8 17.5h7" />
    </svg>
  );
}

export function AutomationIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className} aria-hidden="true">
      <path d="M12 2.5 13.3 9 20 10.3 13.3 11.6 12 18 10.7 11.6 4 10.3 10.7 9Z" />
      <circle cx="18.5" cy="18.5" r="2" />
    </svg>
  );
}
