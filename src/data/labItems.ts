/**
 * Data for the My Lab page.
 *
 *  - `category` drives the filter chips (chips are generated from the data,
 *    so adding a new category here automatically adds a chip).
 *  - `media` is the real asset: a hosted `video` (e.g. a Cloudinary URL) or an
 *    `image`. If omitted, the card falls back to the `visual` gradient + emoji.
 *  - `aspect` controls the card height in the masonry grid (uneven heights).
 *  - Items WITH a `detail` object open a detail view when clicked;
 *    items without one are display-only cards.
 *
 * Hosting a video: upload to Cloudinary (or drop it in /public/lab), then set
 *   media: { kind: 'video', src: 'https://res.cloudinary.com/.../file.mp4', poster: '...jpg' }
 * `poster` is an optional thumbnail image shown before the video plays.
 */

export type LabMedia =
  | { kind: 'video'; src: string; poster?: string }
  | { kind: 'image'; src: string }

export type LabItem = {
  id: string
  title: string
  category: string
  blurb: string
  aspect: string
  visual: { gradient: string; emoji: string }
  media?: LabMedia
  detail?: {
    year: string
    tools: string[]
    body: string[]
  }
}

export const labItems: LabItem[] = [
  {
    id: 'gazzi-gz-one',
    title: 'GAZZI GZ-ONE',
    category: 'AI Video',
    blurb: 'A short brand film for GAZZI GZ-ONE, created with Higgsfield and directed using Claude.',
    aspect: 'aspect-[9/16]',
    visual: { gradient: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)', emoji: '🎥' },
    media: {
      kind: 'video',
      src: 'https://res.cloudinary.com/vsgrecsd/video/upload/v1785151487/GAZZI_GZ-ONE_f92kkl.mp4',
      // Poster = a frame grabbed 2s into the video (so_2) so it isn't a black first frame.
      poster: 'https://res.cloudinary.com/vsgrecsd/video/upload/so_2/v1785151487/GAZZI_GZ-ONE_f92kkl.jpg',
    },
    detail: {
      year: '2026',
      tools: ['Higgsfield', 'Claude'],
      body: [
        'A short brand film for GAZZI GZ-ONE, generated with Higgsfield, with the concept, shot direction, and edit sequencing worked out together with Claude.',
        'An experiment in how far AI video tooling can carry a brand piece end to end — from idea to a finished, on-brand cut.',
      ],
    },
  },
  {
    id: 'upload-icon-motion',
    title: 'Upload Icon Motion',
    category: 'Motion Graphics',
    blurb: 'A 2D upload-icon micro-interaction, exploring animation for the upload feature.',
    aspect: 'aspect-square',
    visual: { gradient: 'linear-gradient(135deg, #2b5876 0%, #4e4376 100%)', emoji: '📤' },
    media: {
      kind: 'video',
      src: 'https://res.cloudinary.com/vsgrecsd/video/upload/v1785152427/Upload_Icon_motion_nxu2tw.mp4',
      // Poster = the final frame (~1.6s) showing the completed checkmark, not the blank first second.
      poster: 'https://res.cloudinary.com/vsgrecsd/video/upload/so_1.6/v1785152427/Upload_Icon_motion_nxu2tw.jpg',
    },
    detail: {
      year: '2023',
      tools: ['Adobe Illustrator', 'Adobe After Effects'],
      body: [
        'The best way to attain great user experience is to have great interaction in the design. This is an exploration of a 2D icon with animation for the UPLOAD feature.',
        'Well, what do you think?',
      ],
    },
  },
  {
    id: 'ai-product-film',
    title: 'AI Product Film — Concept',
    category: 'AI Video',
    blurb: 'A 40s concept film generated end-to-end with AI, from script to color grade.',
    aspect: 'aspect-[16/11]',
    visual: { gradient: 'linear-gradient(135deg, #1a2980 0%, #26d0ce 100%)', emoji: '🎬' },
    detail: {
      year: '2026',
      tools: ['Runway', 'Midjourney', 'After Effects'],
      body: [
        'An experiment to see how far AI tooling can carry a product film before a human needs to touch it. The script, storyboard frames, and motion passes were all machine-generated, then assembled and graded by hand.',
        'The biggest lesson: AI nails establishing shots and abstract transitions, but product close-ups still need manual compositing for believable materials.',
      ],
    },
  },
  {
    id: 'aurora-gradients',
    title: 'Aurora Gradient Studies',
    category: 'Motion Graphics',
    blurb: 'Slow-moving gradient fields exploring calm, ambient motion.',
    aspect: 'aspect-[3/4]',
    visual: { gradient: 'linear-gradient(160deg, #c471f5 0%, #fa71cd 55%, #ffdee0 100%)', emoji: '🌈' },
  },
  {
    id: 'iso-workspace',
    title: 'Isometric Workspace',
    category: 'Illustration',
    blurb: 'A tiny isometric world built from my actual desk setup.',
    aspect: 'aspect-square',
    visual: { gradient: 'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)', emoji: '🖥️' },
    detail: {
      year: '2025',
      tools: ['Figma', 'Illustrator'],
      body: [
        'Recreated my home studio as an isometric illustration — every object modeled from reference photos, down to the coffee mug.',
        'Started as a warm-up exercise and ended as a full style exploration: consistent 30° angles, a limited 6-color palette, and soft double shadows.',
      ],
    },
  },
  {
    id: 'glass-dashboard',
    title: 'Glassmorphism Dashboard',
    category: 'UI Exploration',
    blurb: 'How far can frosted glass go before usability breaks?',
    aspect: 'aspect-[4/5]',
    visual: { gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', emoji: '📊' },
    detail: {
      year: '2025',
      tools: ['Figma', 'Principle'],
      body: [
        'A telecom analytics dashboard rebuilt entirely with translucent layers — testing contrast ratios at every blur level.',
        'Verdict: glass works for chrome and surfaces, but data visualisations need solid backgrounds. Accessibility checks failed below 60% surface opacity, which became the rule for the whole exploration.',
      ],
    },
  },
  {
    id: 'particle-logo',
    title: 'Particle Logo Reveal',
    category: 'Motion Graphics',
    blurb: '60fps particle simulation that assembles into a wordmark.',
    aspect: 'aspect-[16/10]',
    visual: { gradient: 'linear-gradient(135deg, #0f2027 0%, #2c5364 100%)', emoji: '✨' },
  },
  {
    id: 'neon-city',
    title: 'Neon City Loops',
    category: 'AI Video',
    blurb: 'Seamless looping cityscapes dreamed up by a diffusion model.',
    aspect: 'aspect-[3/4]',
    visual: { gradient: 'linear-gradient(150deg, #41295a 0%, #f64f59 100%)', emoji: '🌆' },
    detail: {
      year: '2026',
      tools: ['Stable Diffusion', 'Deforum', 'Premiere'],
      body: [
        'A series of infinitely-looping neon city flythroughs. Each loop is a 300-frame diffusion sequence stitched so that the last frame feeds the first.',
        'The hard part was temporal consistency — keeping buildings from melting between frames took a custom depth-map pipeline.',
      ],
    },
  },
  {
    id: 'farm-characters',
    title: 'Character Set — Farm Life',
    category: 'Illustration',
    blurb: 'A cast of characters inspired by weekends of organic farming.',
    aspect: 'aspect-[4/5]',
    visual: { gradient: 'linear-gradient(135deg, #96e6a1 0%, #d4fc79 100%)', emoji: '🐐' },
  },
  {
    id: 'banking-micro',
    title: 'Banking Micro-interactions',
    category: 'UI Exploration',
    blurb: 'Tiny moments of delight for payments, transfers, and success states.',
    aspect: 'aspect-square',
    visual: { gradient: 'linear-gradient(135deg, #13547a 0%, #80d0c7 100%)', emoji: '💳' },
    detail: {
      year: '2024',
      tools: ['Figma', 'Lottie', 'After Effects'],
      body: [
        'A library of 14 micro-interactions for a concept banking app — card swipes, biometric confirmation, and a confetti-free success state that still feels rewarding.',
        'Every animation ships as a Lottie file under 30kb, tested at 60fps on mid-range Android devices.',
      ],
    },
  },
  {
    id: 'type-in-motion',
    title: 'Type in Motion',
    category: 'Motion Graphics',
    blurb: 'Kinetic typography studies set to spoken-word audio.',
    aspect: 'aspect-[4/5]',
    visual: { gradient: 'linear-gradient(135deg, #232526 0%, #414345 100%)', emoji: '🔤' },
    detail: {
      year: '2025',
      tools: ['After Effects', 'IBM Plex Sans'],
      body: [
        'Ten short kinetic-type pieces, each animating a single sentence of spoken word. The constraint: one typeface (IBM Plex Sans), two weights, no color.',
        'Rhythm did all the work — timing curves were matched to the audio waveform by hand, frame by frame.',
      ],
    },
  },
  {
    id: 'dreamscape',
    title: 'Dreamscape Journey',
    category: 'AI Video',
    blurb: 'Morphing landscapes exploring AI as a surrealist collaborator.',
    aspect: 'aspect-square',
    visual: { gradient: 'linear-gradient(135deg, #667db6 0%, #0082c8 50%, #8360c3 100%)', emoji: '🌌' },
  },
  {
    id: 'botanical-lines',
    title: 'Botanical Line Art',
    category: 'Illustration',
    blurb: 'Single-line plant drawings — one stroke, no lifting the pen.',
    aspect: 'aspect-[3/4]',
    visual: { gradient: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)', emoji: '🌿' },
  },
  {
    id: 'spatial-ui',
    title: 'Spatial UI — Vision Concept',
    category: 'UI Exploration',
    blurb: 'Rethinking a telecom dashboard for headset-first spatial computing.',
    aspect: 'aspect-[16/10]',
    visual: { gradient: 'linear-gradient(135deg, #3a1c71 0%, #d76d77 55%, #ffaf7b 100%)', emoji: '🥽' },
    detail: {
      year: '2026',
      tools: ['Figma', 'Spline', 'Reality Composer'],
      body: [
        'What does an enterprise dashboard look like when it floats in your room? This concept re-arranges KPI cards into depth layers — glanceable data near, drill-downs far.',
        'Prototyped with eye-tracking heatmaps in mind: primary metrics sit in the natural resting gaze zone, alerts break in from the periphery.',
      ],
    },
  },
]
