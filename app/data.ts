export const projects = [
  {
    title: 'Fitflow',
    description:
      'A fitness and nutrition platform running on web, iOS and Android from one codebase.',
    problem:
      'One domain — workouts, nutrition, progress, streaks — needed to exist identically on three surfaces, and the default path produces three implementations that quietly diverge until a "workout" means something different on each.',
    decision:
      'Put the domain in shared packages — types, API client, sync logic, design tokens — consumed by a Next.js web app and an Expo app from a single Turborepo, with platform-specific capability (Apple Health, offline persistence, tablet layout) confined behind adapter interfaces at the app boundary.',
    cost: 'Every native capability has to be expressed through an adapter before it can ship, so individual features land slower than a platform-idiomatic implementation would. Bought in exchange: one definition of the domain instead of three, and a feature that ships to all surfaces at once.',
    url: 'https://www.fitflow.ai/',
    image: '/images/fitflow.png',
    year: '2026',
    company: 'Creative Clicks',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'AWS',
      'Anthropic Claude',
    ],
  },
  {
    title: 'AuthentiQAI',
    description:
      'Content authenticity platform — AI detection, plagiarism checking, and writing assistance across text, image and video.',
    problem:
      'Three tools that present as separate products share one pipeline underneath — ingest, chunk, dispatch to multiple models, return a scored result — and a Chrome extension was arriving as a fourth consumer of exactly that pipeline.',
    decision:
      'Treated the analysis pipeline and the result contract as the versioned core, with each tool as a thin surface over it and model providers behind a common interface, so adding GPT, Claude or a new detector is configuration rather than a code path.',
    cost: "A future tool that doesn't fit the shared result shape is now expensive to add, and the provider abstraction gives up per-model tuning. Worth it at four consumers; it wouldn't have been at one.",
    url: 'https://authentiqai.io/',
    image: '/images/authentiq.png',
    year: '2025',
    company: 'Creative Clicks',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'AWS',
      'Anthropic Claude',
    ],
  },
  {
    title: 'Dumpert',
    description:
      "The Netherlands' largest video platform, ~1.2M daily actives.",
    problem:
      'a legacy codebase where any change carried platform-wide blast radius.',
    decision:
      'decomposed into feature boundaries replaceable one at a time, running old and new in parallel through the launch.',
    cost: 'months of deliberate duplication — bought in exchange for never needing a freeze.',

    url: 'https://www.dumpert.nl/',
    image: '/images/dumpert.jpg',
    year: '2024',
    company: 'Mediahuis Nederland',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Google Cloud',
      'Tailwind CSS',
    ],
  },
  {
    title: 'KPN Newsroom',
    description: 'Enterprise newsroom platform for two very different brands.',
    problem:
      'every client wanted bespoke; every fork doubled the maintenance surface.',
    decision:
      'brand differences confined to configuration and tokens; the codebase stayed single.',
    cost: 'a genuinely bespoke client is slower to serve — worth it against N codebases.',
    url: 'https://www.overons.kpn/nieuws/',
    image: '/images/kpn.png',
    year: '2023',
    company: 'PressPage',
    technologies: ['Svelte', 'JavaScript', 'SCSS', 'jQuery', 'Vite'],
  },
  {
    title: 'Smart Newsroom',
    description: 'Enterprise newsroom platform for two very different brands.',
    problem:
      'every client wanted bespoke; every fork doubled the maintenance surface.',
    decision:
      'brand differences confined to configuration and tokens; the codebase stayed single.',
    cost: 'a genuinely bespoke client is slower to serve — worth it against N codebases.',
    url: 'https://media.smart.com/',
    image: '/images/smart.jpg',
    year: '2023',
    company: 'PressPage',
    technologies: ['Vue.js', 'JavaScript', 'SCSS', 'jQuery', 'Contentful'],
  },
  {
    title: 'Toekomst Kamer',
    description:
      'The Toekomst Kamer is a platform that allows the Dutch people to vote on the most important issues of the day. From voting on sustainability issues to voting on the future of AI.',
    url: 'https://detoekomstkamer.nl/',
    image: '/images/toekomst.jpg',
    year: '2022',
    company: 'Independent',
    technologies: ['React', 'TypeScript', 'SCSS', 'Node.js', 'Firebase'],
  },
  {
    title: 'kentucky owl',
    description:
      "The beautiful e-commerce website for the award winning bourbon from the USA re-assembling the brand identity and the brand voice. This was a rebranding project, where the sole purpose was to reassemble the brand identity and the brand voice. Hooking up the e-commerce platform with the brand's backend Shopify store.",
    url: 'https://kentuckyowlbourbon.com/',
    image: '/images/kentucky.png',
    year: '2022',
    company: 'Independent',
    technologies: ['React', 'TypeScript', 'PostgreSQL', 'Shopify', 'Hydrogen'],
  },
  {
    title: 'Cradle to Cradle',
    description:
      'The Cradle to Cradle certification is a global standard for sustainable and circular products. The certification is awarded to products that meet the highest standards of sustainability and circularity.',
    url: 'https://c2ccertified.org/',
    image: '/images/cradle.png',
    year: '2022',
    company: 'Independent',
    technologies: ['React', 'TypeScript', 'Salesforce', 'Remix', 'MySQL'],
  },
  {
    title: 'Max Health',
    description:
      'Simplify your health journey with our all-in-one telemedicine platform, providing effective treatments and dedicated professional support.',
    url: 'https://max-health.com/',
    image: '/images/max.webp',
    year: '2025',
    company: 'Creative Clicks',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AWS', 'Node.js'],
  },
  {
    title: 'Creative Clicks',
    description:
      'Creative Clicks is a full-service digital marketing agency that helps businesses grow their online presence and reach their target audience.',
    url: 'https://creativeclicks.com/',
    image: '',
    year: '2025',
    company: 'Creative Clicks',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AWS', 'Node.js'],
  },
  {
    title: 'Jong & Out',
    description:
      'Jong & Out is a dating app for young people to find their perfect match.',
    url: 'https://www.jongenout.nl/',
    image: '',
    year: '2023',
    company: 'Independent',
    technologies: ['React Native', 'TypeScript', 'Expo', 'Firebase', 'SCSS'],
  },
];

export const themes = [
  {
    id: 'classic',
    name: 'Classic',
    palette: ['#ffffff', '#ff335f', '#43a9a3', '#373a3c', '#818a91'],
  },
  {
    id: 'dark',
    name: 'Dark',
    palette: ['#0e141b', '#ff5277', '#43a9a3', '#ffffff', '#818a91'],
  },
  {
    id: 'beach',
    name: 'Koopa Beach',
    palette: ['#fffffe', '#ff9d00', '#bae8e8', '#272343', '#2d334a'],
  },
  {
    id: 'choco',
    name: 'Choco Mountain',
    palette: ['#55423d', '#f3ab87', '#e78fb3', '#fffffe', '#ffc0ad'],
  },
  {
    id: 'moomoo',
    name: 'Moo Moo Farm',
    palette: ['#fef6e4', '#f582ae', '#8bd3dd', '#172c66', '#006e8a'],
  },
  {
    id: 'bowser',
    name: "Bowser's Castle",
    palette: ['#16161a', '#7f5af0', '#2cb67d', '#fffffe', '#94a1b2'],
  },
  {
    id: 'yoshi',
    name: 'Yoshi Valley',
    palette: ['#fafbf5', '#99c221', '#e55812', '#41474c', '#757d84'],
  },
  {
    id: 'rainbow',
    name: 'Rainbow Road',
    palette: ['#140527', '#49f5f7', '#01c317', '#feff00', '#ff464d'],
  },
  {
    id: 'lobster',
    name: 'Lobster Life',
    palette: ['#fcddd4', '#b62b2b', '#fb9f13', '#4b1313', '#146caa'],
  },
  {
    id: 'hackernews',
    name: 'Hacker News',
    palette: ['#f6f6ef', '#ff6600', '#ff6600', '#000000', '#828282'],
  },
];
