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

export const FigmaLogo = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
  </svg>
)

export const GitLogo = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z" />
  </svg>
)

export const VercelLogo = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="m12 1.608 12 20.784H0Z" />
  </svg>
)

export const ClickUpLogo = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M2 18.439l3.69-2.828c1.961 2.56 4.044 3.739 6.363 3.739 2.307 0 4.33-1.166 6.203-3.704L22 18.405C19.298 22.065 15.941 24 12.053 24 8.178 24 4.788 22.078 2 18.439zM12.04 6.15l-6.568 5.66-3.036-3.52L12.055 0l9.543 8.296-3.05 3.509z" />
  </svg>
)

export const ClaudeLogo = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z" />
  </svg>
)

export const KimiLogo = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="m1.053 16.91 9.538 2.55a21 20.981 0 0 0 .06 2.031l5.956 1.592a12 11.99 0 0 1-15.554-6.172m-1.02-5.79 11.352 3.035a21 20.981 0 0 0-.469 2.01l10.817 2.89a12 11.99 0 0 1-1.845 2.004L.658 15.918a12 11.99 0 0 1-.625-4.796m1.593-5.146L13.573 9.17a21 20.981 0 0 0-1.01 1.874l11.297 3.02a21 20.981 0 0 1-.67 2.362l-11.55-3.087L.125 10.26a12 11.99 0 0 1 1.499-4.285ZM6.067 1.58l11.285 3.016a21 20.981 0 0 0-1.688 1.719l7.824 2.091a21 20.981 0 0 1 .513 2.664L2.107 5.218a12 11.99 0 0 1 3.96-3.638M21.68 4.866 7.222 1.003A12 11.99 0 0 1 21.68 4.866" />
  </svg>
)

export const TerminalLogo = ({ className }: IconProps) => (
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
    <rect x="2" y="4" width="20" height="16" rx="2.5" />
    <path d="m6.5 9 3.5 3-3.5 3" />
    <path d="M12.5 15h5" />
  </svg>
)
