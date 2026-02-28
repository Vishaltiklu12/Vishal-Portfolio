import type { Project } from './types'

// NOTE: Replace GitHub/live links when you have them.
export const PROJECTS: Project[] = [
  {
    id: 'pet-store',
    title: 'Pet Store — E‑Commerce Platform',
    year: '2024',
    domain: 'Web & Full Stack Systems',
    tagline: 'Catalog • Cart • Checkout',
    summary:
      'End‑to‑end e‑commerce platform concept and build: product discovery, cart, checkout, accounts, and content features.',
    tech: ['React', 'JavaScript', 'PHP', 'MySQL', 'HTML/CSS'],
    problem:
      'Create a user-friendly e‑commerce experience for pet supplies with an extensible foundation for growth features (subscriptions, affiliate, loyalty).',
    architecture:
      'Client UI (React/JS) → server endpoints (PHP/Node optional) → MySQL schema (products/orders/users) → deploy as static + API or full stack app.',
    contributions: [
      'Designed key user flows (browse → product → cart → checkout) with responsive UI patterns.',
      'Modeled core entities (products, inventory, orders, payments) in a relational schema.',
      'Implemented cart/checkout logic with validation and clean state management patterns.',
      'Outlined growth features: subscription boxes, affiliate links, FAQs/newsletter, community/blog modules.',
    ],
    highlights: ['Relational schema', 'Scalable UI modules', 'Monetization-ready'],
    links: {
      github: '',
      live: '',
    },
  },
  {
    id: 'muir-vr',
    title: 'Muir Experience — VR (Unity)',
    year: '2023',
    domain: 'VR & Interactive Systems',
    tagline: 'Immersive learning',
    summary:
      'A VR experience recreating Yosemite landscapes with interactive storytelling and a Rec Room‑style UI for exploration.',
    tech: ['Unity', 'C#', 'VR Interaction'],
    problem:
      'Deliver an immersive, educational environment that combines exploration, narrative, and interaction without overwhelming users.',
    architecture:
      'Unity scenes + modular interaction scripts → UI layer for navigation and learning modules → asset pipeline for environments and props.',
    contributions: [
      'Built interactive scenes and navigation UI designed for comfort and low friction.',
      'Implemented interaction flows (treks, wildlife, information nodes) with clear feedback states.',
      'Optimized scene composition and UI responsiveness for stable frame time.',
    ],
    highlights: ['Interaction design', 'Comfort-first UX', 'Scene modularity'],
    links: {
      github: '',
      live: '',
    },
  },
  {
    id: 'character-animation',
    title: 'Character Animation — Blender Pipeline',
    year: '2023',
    domain: 'VR & Interactive Systems',
    tagline: 'Rigging • Expressions • Rendering',
    summary:
      'Character animation work focusing on expressions, rigging, and building repeatable workflows for consistent output.',
    tech: ['Blender', 'Rigging', 'Animation'],
    problem:
      'Create reusable animation workflows that keep output consistent while enabling fast iteration on expressions and motion.',
    architecture:
      'Asset creation → rigging constraints → animation passes → rendering/export → documentation for repeatability.',
    contributions: [
      'Designed and refined character expressions with rig adjustments for natural motion.',
      'Created repeatable steps for animation passes and export consistency.',
      'Improved output quality through iteration and feedback loops.',
    ],
    highlights: ['Repeatable workflow', 'Animation polish'],
    links: {
      github: '',
      live: '',
    },
  },
  {
    id: 'hf-ml',
    title: 'Heart Failure Prediction — EDA + ML',
    year: '2024',
    domain: 'Data & Machine Learning',
    tagline: 'EDA • Baselines • Evaluation',
    summary:
      'Exploratory analysis and baseline modeling to support early detection of heart failure risk using a public dataset.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'EDA'],
    problem:
      'Identify key features correlated with heart failure and evaluate baseline models for predictive performance.',
    architecture:
      'Data cleaning → EDA/feature analysis → baseline models (tree-based) → evaluation metrics and interpretation.',
    contributions: [
      'Performed EDA to understand feature distributions and correlations.',
      'Evaluated baseline classifiers (e.g., decision tree / random forest) and compared performance.',
      'Documented insights and limitations for responsible interpretation.',
    ],
    links: {
      github: '',
      live: '',
    },
  },
  {
    id: 'ir-plan',
    title: 'Incident Response Plan — MedSoftDev SOC',
    year: '2024',
    domain: 'Security & Systems Architecture',
    tagline: 'Ransomware • PII • Playbooks',
    summary:
      'A 6‑phase incident response lifecycle plan for ransomware and PII data loss, with tooling and escalation workflows.',
    tech: ['IR Lifecycle', 'Wireshark', 'Snort', 'Autopsy', 'Jira/Confluence'],
    problem:
      'Move from MSSP dependency to an in‑house SOC posture with clear triage, escalation, containment, and lessons‑learned loops.',
    architecture:
      'Detection/triage → escalation workflow → containment/eradication steps → recovery validation → post‑incident review and hardening.',
    contributions: [
      'Designed lifecycle steps and roles/responsibilities for triage through recovery.',
      'Mapped tools to each stage (network analysis, endpoint forensics, ticketing/tracking).',
      'Defined decision points and escalation paths for ransomware vs PII incidents.',
    ],
    highlights: ['Operational readiness', 'Clear escalation', 'Tool-to-stage mapping'],
    links: {
      github: '',
      live: '',
    },
  },
  {
    id: 'aws-arch',
    title: 'AWS Secure Web App Reference Architecture',
    year: '2024',
    domain: 'Security & Systems Architecture',
    tagline: 'WAF • CloudFront • VPC',
    summary:
      'A scalable AWS architecture blueprint emphasizing security controls, subnet isolation, and resilient deployment patterns.',
    tech: ['AWS', 'Route53', 'WAF', 'CloudFront', 'ELB', 'Auto Scaling', 'RDS'],
    problem:
      'Design a secure, scalable hosting architecture that supports growth while reducing blast radius and improving availability.',
    architecture:
      'Route53 → WAF/CloudFront → ALB/Auto Scaling in public/private subnets → app tier → RDS/ElastiCache/EFS in private subnets.',
    contributions: [
      'Outlined the component-level flow and where security controls belong.',
      'Focused on isolation boundaries (subnets, security groups) and scaling behavior.',
      'Documented operational considerations and failure modes.',
    ],
    links: {
      github: '',
      live: '',
    },
  },
]
