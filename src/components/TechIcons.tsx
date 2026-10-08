import React from 'react';

export function TechIcon({ name, className = "w-5 h-5" }: { name: string; className?: string }) {
  const normalized = name.toLowerCase();

  if (normalized.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c-3.5 0-5.5 1.5-5.5 4.5v2.5h5.5v1H5c-3 0-5 2-5 5.5s2 5.5 5 5.5h2v-2.5c0-2.5 1.5-4 4-4h5.5v-1H11V6.5C11 3.5 13 2 16.5 2H12z" fill="currentColor" fillOpacity="0.2"/>
        <circle cx="8.5" cy="5.5" r="0.75" fill="currentColor"/>
        <circle cx="15.5" cy="18.5" r="0.75" fill="currentColor"/>
      </svg>
    );
  }

  if (normalized.includes('django')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.146 0h3.337v15.244c-1.378.272-2.327.362-3.337.362-3.337 0-4.966-1.54-4.966-4.71 0-3.125 1.766-4.935 4.966-4.935v-5.96zm0 8.016c-1.494 0-2.264.815-2.264 2.355 0 1.584.77 2.355 2.264 2.355v-4.71zM17.5 0h3.337v15.244H17.5V0zM0 6.035h3.337v9.209H0V6.035z" />
      </svg>
    );
  }

  if (normalized.includes('postgres')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    );
  }

  if (normalized.includes('react')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (normalized.includes('node') || normalized.includes('express')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <polygon points="12 2 21 7.5 21 17.5 12 23 3 17.5 3 7.5 12 2" />
        <polyline points="12 12 21 7.5" />
        <polyline points="12 12 12 23" />
        <polyline points="12 12 3 7.5" />
      </svg>
    );
  }

  if (normalized.includes('mongo')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 2s-6 5.5-6 11c0 3.3 2.7 6 6 6s6-2.7 6-6c0-5.5-6-11-6-11z" />
        <line x1="12" y1="2" x2="12" y2="22" />
      </svg>
    );
  }

  if (normalized.includes('docker')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="2" y="8" width="4" height="4" rx="0.5" />
        <rect x="7" y="8" width="4" height="4" rx="0.5" />
        <rect x="12" y="8" width="4" height="4" rx="0.5" />
        <rect x="7" y="3" width="4" height="4" rx="0.5" />
        <rect x="12" y="3" width="4" height="4" rx="0.5" />
        <path d="M1 14h22c0 4-3 7-11 7S1 18 1 14z" />
      </svg>
    );
  }

  if (normalized.includes('git')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="12" r="3" />
        <path d="M6 9v6" />
        <path d="M6 15c0-3 6-3 6-3h3" />
      </svg>
    );
  }

  // Default clean code icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
