export const PROJECTS = [
  {
    id: 'pet-store',
    title: 'Pet Store — E‑Commerce Platform',
    year: '2024',
    domainGroup: 'Web & Full Stack',
    domain: 'Web & Full Stack',
    cover: '/domains/web.svg',
    tagline: 'Catalog • Cart • Checkout',
    bullets: [
      'React storefront with product discovery and cart flows',
      'REST/JSON-ready backend design + relational schema',
      'Source bundle attached (zip)',
    ],
    summary:
      'Academic full-stack build focused on clean UI architecture, predictable state, and an extensible foundation for growth features (subscriptions, loyalty, and content modules).',
    tech: ['React', 'JavaScript (ES6+)', 'Node.js', 'REST APIs', 'MongoDB/MySQL'],
    problem:
      'Build a user-friendly e-commerce experience for pet supplies while keeping the architecture modular enough to add growth features without rewrites.',
    architecture:
      'Component-based React UI → API layer (REST/JSON) → persistence layer (schema for products, inventory, orders, users) → deploy as static + API or full-stack app.',
    contributions: [
      'Designed core UX flows (browse → product → cart → checkout) with responsive UI patterns and reusable components.',
      'Modeled core entities (products, inventory, orders, payments) to keep data consistent and queryable as the catalog scales.',
      'Implemented cart logic and validations with clean state updates to avoid UI desync and edge-case bugs.',
      'Packaged the project as a downloadable source bundle for reviewers.',
    ],
    highlights: ['Modular components', 'Data modeling', 'Production-style validations'],
    assets: [{ label: 'Source Code (ZIP)', href: '/projects/petstore-source.zip' }],
    links: { github: '', live: '' },
  },

  {
    id: 'rec-room-vr',
    title: 'Rec Room VR World Exploration',
    year: '2024',
    domainGroup: 'VR & 3D',
    domain: 'VR & 3D',
    cover: '/domains/vr.svg',
    tagline: 'World building • Interaction • Report',
    bullets: [
      'VR world exploration concept and interaction design',
      'Walkthrough + design artifacts in PPT',
      'Final report attached (PDF)',
    ],
    summary:
      'Academic VR world exploration project emphasizing interaction flow, scene composition, and user comfort for navigation and discovery.',
    tech: ['Unity/VR', 'Interaction Design', '3D Assets', 'UX'],
    problem:
      'Create an exploration-driven VR world that stays comfortable to navigate while still feeling interactive and rewarding.',
    architecture:
      'Scene layout + environment assets → interaction points (info nodes, triggers) → UI/navigation layer → performance passes for stable frame timing.',
    contributions: [
      'Designed exploration routes and interaction moments to keep engagement high without overwhelming users.',
      'Documented environment layout and interaction choices in a presentation for reviewers.',
      'Produced the final written report describing goals, approach, and outcomes.',
    ],
    highlights: ['Comfort-first UX', 'Scene composition', 'Clear documentation'],
    assets: [
      { label: 'Project Deck (PPTX)', href: '/projects/rec-room-vr-world-exploration.pptx' },
      { label: 'Final Written Report (PDF)', href: '/projects/rec-room-final-report.pdf' },
    ],
    links: { github: '', live: '' },
  },

  {
    id: 'vector-presentation',
    title: '3D Vector & Animation — Presentation',
    year: '2023',
    domainGroup: 'VR & 3D',
    domain: 'VR & 3D',
    cover: '/domains/vr.svg',
    tagline: 'Animation pipeline • Concepts',
    bullets: [
      'Animation concepts and vector fundamentals',
      'Workflow-focused presentation',
      'PDF attached',
    ],
    summary:
      'Academic presentation focusing on 3D/vector fundamentals and how they connect to animation workflows and interactive experiences.',
    tech: ['3D Math', 'Animation', 'Documentation'],
    problem:
      'Explain the building blocks behind animation/3D motion in a way that is useful for implementation and debugging.',
    architecture:
      'Concept breakdown → worked examples → workflow notes → practical takeaways for scene/animation pipelines.',
    contributions: [
      'Created a structured walkthrough linking vector fundamentals to practical animation decisions.',
      'Organized examples and visuals into a clean deck-style report for review.',
    ],
    highlights: ['Clear explanation', 'Implementation mindset'],
    assets: [{ label: 'Presentation (PDF)', href: '/projects/vector-presentation.pdf' }],
    links: { github: '', live: '' },
  },

  {
    id: 'hf-ml',
    title: 'Heart Failure Prediction — EDA + ML',
    year: '2024',
    domainGroup: 'Machine Learning',
    domain: 'Machine Learning',
    cover: '/domains/ml.svg',
    tagline: 'EDA • Modeling • Evaluation',
    bullets: [
      'EDA + feature analysis on clinical dataset',
      'Compared multiple classifiers and metrics',
      'Report attached',
    ],
    summary:
      'Academic ML project exploring clinical indicators and evaluating multiple models to predict heart failure risk with responsible interpretation.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'EDA', 'Model Evaluation'],
    problem:
      'Identify features correlated with heart failure and evaluate baseline models for predictive performance using a real clinical dataset.',
    architecture:
      'Data cleaning → EDA/correlation analysis → feature selection → model training (tree + boosting) → evaluation (accuracy, precision/recall, ROC).',
    contributions: [
      'Performed EDA to understand feature distributions and correlations.',
      'Trained and compared multiple classifiers and selected a best-performing approach based on evaluation metrics.',
      'Documented limitations and interpretation notes to reduce over-claiming of results.',
    ],
    highlights: ['Evaluation-driven', 'Feature reasoning', 'Readable reporting'],
    assets: [{ label: 'Full Report (PDF)', href: '/projects/heart-failure-prediction.pdf' }],
    links: { github: '', live: '' },
  },

  {
    id: 'sports-leagues',
    title: 'World’s Richest Sports Leagues — Data Analysis',
    year: '2024',
    domainGroup: 'Machine Learning',
    domain: 'Machine Learning',
    cover: '/domains/ml.svg',
    tagline: 'EDA • Derived metrics • Insights',
    bullets: [
      'Analyzed 700-row league dataset with 10 features',
      'Engineered revenue-per-team + salary ratio metrics',
      'Final report attached',
    ],
    summary:
      'Academic data analysis project exploring revenue, salaries, and viewership across major sports leagues, including derived efficiency and allocation metrics.',
    tech: ['Python', 'Pandas', 'Visualization', 'Feature Engineering'],
    problem:
      'Understand what drives league revenue and audience size, and compare efficiency across sports and regions.',
    architecture:
      'Data cleaning → descriptive stats → derived metrics (revenue/team, salary-to-revenue) → visual analysis → insights + future directions.',
    contributions: [
      'Summarized dataset structure and key stats, then validated missing values and data consistency.',
      'Created derived metrics to compare efficiency (revenue per team) and financial allocation (salary-to-revenue ratio).',
      'Produced narrative insights around legacy vs newer leagues and sport-specific trends.',
    ],
    highlights: ['Derived metrics', 'Narrative insights', 'Visual-first exploration'],
    assets: [{ label: 'Final Report (PDF)', href: '/projects/sports-league-data-analysis.pdf' }],
    links: { github: '', live: '' },
  },

  {
    id: 'security-incident-mgmt',
    title: 'Security Incident Management — IR Playbook',
    year: '2024',
    domainGroup: 'Security & Cloud',
    domain: 'Security & Cloud',
    cover: '/domains/security.svg',
    tagline: 'Triage • Containment • Recovery',
    bullets: [
      'IR lifecycle and escalation design',
      'Tooling mapped to each phase (forensics + monitoring)',
      'Team report attached',
    ],
    summary:
      'Academic incident response project focused on designing an actionable lifecycle, escalation paths, and tool-to-stage mapping for real-world incidents.',
    tech: ['IR Lifecycle', 'Wireshark', 'Snort', 'Autopsy', 'Jira/Confluence'],
    problem:
      'Turn incident response from vague “steps” into a repeatable process with decision points, ownership, and operational readiness.',
    architecture:
      'Detect/triage → classify/severity → contain/eradicate → recover/validate → post-incident review → hardening and control improvements.',
    contributions: [
      'Defined roles, decision points, and escalation paths to reduce “handoff chaos” during incidents.',
      'Mapped monitoring + forensics tools to each phase to make execution realistic, not theoretical.',
      'Produced documentation suitable for training and future runbooks.',
    ],
    highlights: ['Operational clarity', 'Tool-to-stage mapping', 'Escalation logic'],
    assets: [{ label: 'Team Final Report (PDF)', href: '/projects/security-incident-management.pdf' }],
    links: { github: '', live: '' },
  },

  {
    id: 'cloud-mobile-security',
    title: 'Cloud & Mobile Security — Mini Capstone',
    year: '2024',
    domainGroup: 'Security & Cloud',
    domain: 'Security & Cloud',
    cover: '/domains/security.svg',
    tagline: 'Threats • Controls • Hardening',
    bullets: [
      'Security controls and risk-driven recommendations',
      'Covers cloud + mobile threat surfaces',
      'Capstone report attached',
    ],
    summary:
      'Academic capstone focusing on cloud and mobile security fundamentals, control selection, and practical hardening recommendations.',
    tech: ['Cloud Security', 'Mobile Security', 'Risk Assessment', 'Security Controls'],
    problem:
      'Translate security requirements into implementable controls that reduce risk without breaking delivery speed.',
    architecture:
      'Threat surface identification → control mapping → implementation notes → validation and monitoring considerations.',
    contributions: [
      'Documented risks and mapped them to pragmatic controls and monitoring checkpoints.',
      'Produced a capstone report suitable for use as a baseline security plan for small teams.',
    ],
    highlights: ['Risk→control mapping', 'Practical recommendations'],
    assets: [{ label: 'Capstone Report (PDF)', href: '/projects/cloud-mobile-security.pdf' }],
    links: { github: '', live: '' },
  },

  {
    id: 'privacy-controls',
    title: 'Privacy Controls — CCPA vs HIPAA',
    year: '2024',
    domainGroup: 'Security & Cloud',
    domain: 'Security & Cloud',
    cover: '/domains/security.svg',
    tagline: 'Compliance • Controls • DB design',
    bullets: [
      'Compared common privacy requirements and conflicts',
      'Mapped controls across CCPA, HIPAA, NIST',
      'Privacy-preserving DB design included',
    ],
    summary:
      'Academic privacy project comparing regulatory requirements and proposing controls, templates, and a privacy-preserving patient database design.',
    tech: ['CCPA', 'HIPAA', 'NIST Privacy Framework', 'Data Protection', 'SQL'],
    problem:
      'Build a practical privacy control baseline that acknowledges conflicting requirements (e.g., deletion vs retention) and supports audits.',
    architecture:
      'Requirements mapping → control selection/templates → multi-state considerations → privacy-preserving DB schema + access logging.',
    contributions: [
      'Identified shared requirements (access/correction, minimization, safeguards, breach notice) and conflicts (deletion vs retention).',
      'Compared tool approaches (Ethyca vs TrustArc) and how they map to privacy frameworks.',
      'Designed a privacy-preserving patient DB schema using consent, metadata classification, encryption/hashing, and access logs.',
    ],
    highlights: ['Compliance reasoning', 'Schema design', 'Auditability'],
    assets: [{ label: 'Mini Capstone (PDF)', href: '/projects/privacy-controls.pdf' }],
    links: { github: '', live: '' },
  },
]
