import hubbit from '../assets/figma/hubbit.png'
import lashic from '../assets/figma/lashic.png'
import emersonPreview from '../assets/emerson/hero-mockup.jpg'
import dtxAicdp from '../assets/figma/dtx-aicdp.jpg'
import eandCard from '../assets/figma/eand-card.jpg'
import mvivaCvmaasCover from '../assets/figma/mviva-cvmaas-cover.jpg'

export type Project = {
  id: string
  tag: string
  title: string
  description: string
  descriptionLink?: {
    text: string
    href: string
  }
  image: string
  imageAlt: string
  updating: boolean
  metrics?: { value: string; label: string }[]
  privateAccess?: boolean
}

export const projects: Project[] = [
  {
    id: 'daitics-cdp',
    tag: 'Product Design · AI',
    title: 'Daitics AI CDP',
    description:
      'A sovereign, on-prem, telco-native Customer Data Platform where marketing ops, developers, data scientists and DPOs share one workspace. I shaped the authoring paradigm — three peer modes over one canonical spec, AI as co-author, every action auditable by default.',
    image: dtxAicdp,
    imageAlt: 'Daitics AI CDP authoring workspace',
    updating: false,
    privateAccess: true,
    metrics: [
      { value: '12+', label: 'personas served through one Portal' },
      { value: '3 modes', label: 'Builder / Code / Authoring Agent over one canonical IR' },
    ],
  },
  {
    id: 'mviva-cvmaas',
    tag: 'Product Design',
    title: 'mViva + CVMaaS — self-serve campaigns',
    description:
      'From a multi-team, procedural process to business users running real-time and ad-hoc campaigns themselves. CVMaaS provisions and governs; mViva builds and ships.',
    image: mvivaCvmaasCover,
    imageAlt: 'CVM as a service + Implementing mViva — cover art',
    updating: false,
    privateAccess: true,
    metrics: [
      { value: 'Multi-team', label: 'hand-off chain compressed to one product pair' },
      { value: 'Self-serve', label: 'business teams now run their own campaigns' },
    ],
  },
  {
    id: 'rmn-dolphin',
    tag: 'Product Design · AI-assisted build',
    title: 'RMN Dolphin — Retail Media Network',
    description:
      'A retail media network on first-party telco data. Three portals (SSP, DSP, Retail) sharing one audience and governance layer. I led design across all three, then rebuilt a walkable demo using Claude Code + Git.',
    image: eandCard,
    imageAlt: 'RMN retail media network preview',
    updating: false,
    privateAccess: true,
    metrics: [
      { value: '3 portals', label: 'SSP · DSP · Retail — one shared platform' },
      { value: 'Claude Code', label: 'used to rebuild a walkable demo in days' },
    ],
  },
  {
    id: 'shop-manage',
    tag: 'UX/UI Design · Craft',
    title: 'Shop & Manage — SIM & plan revamp',
    description:
      'Consumer-facing plan management. Two drops across the release + a customer-flag flow that decides which offers surface for which customer.',
    image: eandCard,
    imageAlt: 'Shop & Manage revamp preview',
    updating: false,
    privateAccess: true,
    metrics: [
      { value: '2 drops', label: 'v1 shipped, then refined against real usage' },
      { value: 'Flag-driven', label: 'offers surface only when eligibility says so' },
    ],
  },
  {
    id: 'emerson-deltav-psm',
    tag: 'UX/UI Design',
    title: 'Emerson - DeltaV™ PSM',
    description:
      'Redesigning how process engineers / scientists create, compare, and control hundreds of site-specific recipe variants in Emerson’s DeltaV™ PSM — turning an untraceable sprawl into a single, confident workspace for regulated pharma manufacturing.',
    image: emersonPreview,
    imageAlt: 'Emerson DeltaV PSM variant comparison workspace',
    updating: false,
    metrics: [
      { value: '30+', label: 'site variants comparable at a glance' },
      { value: '~40%', label: 'faster variant reviews' },
    ],
  },
  {
    id: 'hubbit',
    tag: 'Product Design',
    title: 'Hubbit',
    description:
      'Hubbit is a B2B e-commerce platform. It provides various services by connecting vendors, suppliers and can place orders and offers for various types of goods and products. The objective of the application is to streamline the bidding and purchase process of material between suppliers and buyers.',
    image: hubbit,
    imageAlt: 'Hubbit mobile app in hand',
    updating: false,
    metrics: [
      { value: '40%', label: 'increase in conversion rate' },
      { value: '30%', label: 'increase in user adoption' },
    ],
  },
  {
    id: 'lashic',
    tag: 'Product Design',
    title: 'Lashic',
    description:
      'The Lashic Care platform is a nursing care product owned by Infic Inc. It’s a service that installs IoT sensors nearby to the elderly person and notify the abnormalities at an early stage based on their daily activities and history.',
    image: lashic,
    imageAlt: 'Lashic dashboard on tablet and phone',
    updating: false,
    metrics: [
      { value: '50%', label: 'reduction in user errors' },
      { value: '40%', label: 'increase in user satisfaction' },
    ],
  },
]
