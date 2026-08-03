type IconProps = {
  className?: string
}

export const ArrowRight = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path
      d="M13.29 17.29a1 1 0 0 1 0-1.41L16.17 13H5a1 1 0 1 1 0-2h11.17l-2.88-2.88a1 1 0 1 1 1.42-1.41l4.58 4.58a1 1 0 0 1 0 1.42l-4.58 4.58a1 1 0 0 1-1.42 0Z"
      fill="currentColor"
    />
  </svg>
)

export const ArrowOutward = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path
      d="M5.86 15.4a.9.9 0 0 1 0-1.27l6.86-6.86H7.6a.9.9 0 0 1 0-1.8h7.3a.9.9 0 0 1 .9.9v7.3a.9.9 0 0 1-1.8 0V8.55l-6.87 6.86a.9.9 0 0 1-1.27 0Z"
      fill="currentColor"
    />
  </svg>
)

export const Hourglass = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path
      d="M6 22a1 1 0 0 1 0-2h1v-3.15q0-1.28.6-2.4T9.3 12.6q-1.1-.72-1.7-1.84T7 8.35V4H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2h-1v4.35q0 1.29-.6 2.41t-1.7 1.84q1.1.73 1.7 1.85t.6 2.4V20h1a1 1 0 0 1 0 2H6Zm3-2h6v-3.15q0-1.25-.88-2.13T12 13.85q-1.25 0-2.13.87T9 16.85V20Zm3-9.85q1.25 0 2.13-.88T15 7.15V4H9v3.15q0 1.24.88 2.12t2.12.88Z"
      fill="currentColor"
    />
  </svg>
)

export const Handshake = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
    <path d="m21 3 1 11h-2" />
    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
    <path d="M3 4h8" />
  </svg>
)

/* Animated 3-state loading hourglass: sand drains top → middle → bottom on a loop. */
export const LoadingHourglass = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    {/* frame: caps + glass sides */}
    <rect x="5" y="3" width="14" height="1.6" rx="0.8" fill="currentColor" />
    <rect x="5" y="19.4" width="14" height="1.6" rx="0.8" fill="currentColor" />
    <path
      d="M7 4.6 L12 12 L7 19.4 M17 4.6 L12 12 L17 19.4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    {/* sand — top full */}
    <path className="hg-top" d="M8.6 5.6 H15.4 L12 10.7 Z" fill="currentColor" />
    {/* sand — draining */}
    <g className="hg-mid">
      <path d="M10.4 8.2 H13.6 L12 10.7 Z" fill="currentColor" />
      <rect x="11.55" y="10.6" width="0.9" height="3" fill="currentColor" />
      <path d="M9.4 18.4 H14.6 L12 14.6 Z" fill="currentColor" />
    </g>
    {/* sand — bottom full */}
    <path className="hg-bottom" d="M8.2 18.4 H15.8 L12 13 Z" fill="currentColor" />
  </svg>
)

export const OnlineDot = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <circle cx="10" cy="10" r="10" fill="#C1FFD2" className="animate-online-halo" />
    <circle cx="10" cy="10" r="5" fill="#06A131" className="animate-online-dot" />
  </svg>
)
