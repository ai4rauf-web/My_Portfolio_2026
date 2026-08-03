import hubbit from '../assets/figma/hubbit.png'
import lashic from '../assets/figma/lashic.png'
import emersonPreview from '../assets/emerson/hero-mockup.jpg'
import dtxAicdp from '../assets/figma/dtx-aicdp.jpg'
import eandCard from '../assets/figma/eand-card.jpg'

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
}

export const projects: Project[] = [
  {
    id: 'emerson-deltav-psm',
    tag: 'UX/UI Design',
    title: 'Emerson - DeltaV™ PSM',
    description:
      'Redesigning how process engineers create, compare, and control hundreds of site-specific recipe variants in Emerson’s DeltaV™ PSM — turning an untraceable sprawl into a single, confident workspace for regulated pharma manufacturing.',
    image: emersonPreview,
    imageAlt: 'Emerson DeltaV PSM variant comparison workspace',
    updating: false,
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
  },
  {
    id: 'eand',
    tag: 'UX/UI Design',
    title: 'e&',
    description: '',
    image: eandCard,
    imageAlt: 'e& project preview',
    updating: true,
  },
  {
    id: 'dtx-telco-cdp',
    tag: 'Product Design',
    title: 'DTX R&D Telco CDP',
    description: '',
    image: dtxAicdp,
    imageAlt: 'DTX R&D Telco CDP project preview',
    updating: true,
  },
]
