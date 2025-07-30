import { PythonIcon } from '@app/public/icons/PythonIcon';
import {
  JavascriptIcon,
  GithubIcon,
  NextjsIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
  AwsIcon,
  HtmlIcon,
  CssIcon,
  SvelteIcon,
  VueIcon,
  ReduxIcon,
  ZustandIcon,
  ContextApiIcon,
  RecoilIcon,
  SassIcon,
  StyledComponentsIcon,
  JestIcon,
  ReactTestingLibraryIcon,
  CypressIcon,
  WebpackIcon,
  ViteIcon,
  ESLintIcon,
  ContentfulIcon,
  SanityIcon,
  StripeIcon,
  GraphqlIcon,
  FirebaseIcon,
  NetlifyIcon,
  VercelIcon,
  CloudflareIcon,
  NpmIcon,
  DesignIcon,
  DevelopmentIcon,
  SeoIcon,
  CursorIcon,
  ClaudeIcon,
  MCPIcon,
  CopilotIcon,
  ChatgptIcon,
  NuxtIcon,
  VueXIcon,
} from '@icons';

export const navbarLinks = [
  {
    id: 2,
    title: 'about',
    href: '/about',
  },
  {
    id: 3,
    title: 'work',
    href: '/work',
  },
  {
    id: 4,
    title: 'contact',
    href: '/contact',
  },
];
export const footerLinks = [
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/yanalalmer/',
  },
  {
    title: 'Github',
    href: 'https://github.com/yanalalmer',
  },
  {
    title: 'Codepen',
    href: 'https://codepen.io/yanalalmer',
  },
];
export const mockedProjects = [
  {
    id: 1,
    slug: 'dumpert',
    projectImage: '/images/dumpert.jpg',
    title: 'dumpert',
    para: 'Dumpert is the most popular video platforms in the Netherlands. The platform has found its way to the heart of the critical millennial and is an indispensable part of the Dutch media landscape. All the bizarre, funny and scandalous content that the internet has to offer can be found here. Visitors actively contribute by “dumping” a stream of videos and pictures.',
    year: 2024,
    roleService: 'Development',
    country: 'The Netherlands',
    context: 'The no.1 dutch video platform',
    brandingColors: ['#1B1B1B', '#D4D4D4', '#66CC22', '#D74B4B', '#2D2D2D'],
    backgroundImageUrl: '/images/dumpert.jpg',
    backgroundTitle: 'Built with love',
    backgroundPara:
      'I had the privilege to help the Dumpert team migrating the legacy application built in Python and PHP to a more modern tech stack built in React, Tailwind and TypeScript.',
    designImage: '/images/dumpert-design.jpeg',
    liveSiteUrl: 'https://www.dumpert.nl/',
  },
  {
    id: 2,
    slug: 'kpn',
    projectImage: '/images/kpn.png',
    title: 'kpn newsroom',
    para: 'The KPN newsroom is a platform that allows the KPN media team upload their latest news, press releases, images and social media content. The platform is created for corporate communications and public relations materials.',
    year: 2021,
    roleService: 'Development',
    country: 'The Netherlands',
    context: 'Dutch Telecom giant',
    brandingColors: ['#00c300', '#1F1F1F', '#000000', '#0AAAFF', '#0066EE'],
    backgroundImageUrl: '/images/kpn-project.png',
    backgroundTitle: 'Very smart',
    backgroundPara:
      'Built as a saas platform, I was responsible for the development of the platform using Vue and css modules, hooked up to the KPN CMS and integrated with their website www.kpn.nl.',
    designImage: '/images/kpn-design.jpeg',
    liveSiteUrl: 'https://www.overons.kpn/nieuws/',
  },
  {
    id: 3,
    slug: 'smart',
    projectImage: '/images/smart.jpg',
    title: 'smart newsroom',
    para: 'Similar to the KPN newsroom, the Smart newsroom is a platform that allows the famous German car brand media team upload their latest news, press releases, images and social media content. The platform is created for corporate communications and public relations materials.',
    year: 2021,
    roleService: 'Development',
    country: 'Germany',
    context: 'A news website for the world',
    brandingColors: ['#151514', '#6B747B', '#F5F5F5', '#969DA3', '#333333'],
    backgroundImageUrl: '/images/smart-project.jpg',
    backgroundTitle: 'cool and simple',
    backgroundPara:
      'One of the most enjoyable projects I worked on, I was responsible for the development of the platform for both the EU and the Asian markets with over 15 languages.',
    designImage: '/images/smart-design.jpeg',
    liveSiteUrl: 'https://media.smart.com/eu/',
  },
  {
    id: 4,
    slug: 'toekomst',
    projectImage: '/images/toekomst.jpg',
    title: 'toekomst kamer',
    para: 'The Toekomst Kamer is a platform that allows the Dutch people to vote on the most important issues of the day. From voting on sustainability issues to voting on the future of AI.',
    year: 2022,
    roleService: 'Development',
    country: 'The Netherlands',
    context: 'Very important initiative',
    brandingColors: ['#643DCB', '#423DDA', '#9D3CB0', '#000822', '#8E3BB5'],
    backgroundImageUrl: '/images/toekomst.jpg',
    backgroundTitle: 'Comprehensive approach',
    backgroundPara:
      'The complete platform needed to be built from scratch in collaboration with the mobile team, I was responsible for the development and maintenance of the web application following the main brand guideline of the toekomst kamer.',
    designImage: '/images/toekomst-design.jpg',
    liveSiteUrl: 'https://detoekomstkamer.nl/',
  },
  {
    id: 5,
    slug: 'kentucky-owl',
    projectImage: '/images/kentucky.png',
    title: 'kentucky owl',
    para: 'The beautiful e-commerce website for the award winning bourbon from the USA re-assembling the brand identity and the brand voice.',
    year: 2021,
    roleService: 'Development',
    country: 'USA',
    context: 'The award winning bourbon',
    brandingColors: ['#FF2700', '#100c37', '#e4edce', '#100c37e6', '#000000'],
    backgroundImageUrl: '/images/kentucky-project.png',
    backgroundTitle: 'Traditional and modern',
    backgroundPara:
      "This was a rebranding project, where the sole purpose was to reassemble the brand identity and the brand voice. Hooking up the e-commerce platform with the brand's backend Shopify store.",
    designImage: '/images/kentucky-design.jpeg',
    liveSiteUrl: 'https://kentuckyowlbourbon.com/',
  },
  {
    id: 6,
    slug: 'c2c',
    projectImage: '/images/c2c.png',
    title: 'Cradle to Cradle',
    para: 'The Cradle to Cradle certification is a global standard for sustainable and circular products. The certification is awarded to products that meet the highest standards of sustainability and circularity.',
    year: 2021,
    roleService: 'Development',
    country: 'The Netherlands',
    context: 'Sustainable and circular',
    brandingColors: ['#0F0080', '#33cd8a', '#00c16d', '#ff8b00', '#b7b3d9'],
    backgroundImageUrl: '/images/c2c-project.png',
    backgroundTitle: 'Fullstack capabilities',
    backgroundPara:
      'The project was a complex fullstack application, connected to Salesforce and the Cradle to Cradle certification platform to ensure highest standards of products displays and certifications.',
    designImage: '/images/c2c-design.jpeg',
    liveSiteUrl: 'https://c2ccertified.org/',
  },
];
export const contactSections = [
  {
    id: 1,
    title: 'contact details',
    links: [
      {
        id: 1,
        href: 'mailto:info@yanalalmir.com',
        link: 'info@yanalalmir.com',
      },
    ],
  },
  {
    id: 2,
    title: 'buseniss details',
    links: [
      {
        id: 1,
        link: 'Yanal Almir',
      },
      {
        id: 2,
        link: 'VAT: NL866034080B01',
      },
      {
        id: 3,
        link: 'Location: The Netherlands',
      },
    ],
  },
  {
    id: 3,
    title: 'socials',
    links: [
      {
        id: 1,
        link: 'LinkedIn',
        href: 'https://www.linkedin.com/in/yanalalmer/',
      },
      {
        id: 2,
        link: 'Github',
        href: 'https://github.com/yanalalmer',
      },
      {
        id: 3,
        link: 'Codepen',
        href: 'https://codepen.io/yanalalmer',
      },
    ],
  },
];
export const techStack = [
  {
    section: 'AI Tools (YES already onboard)',
    items: [
      {
        name: 'Cursor',
        icon: CursorIcon,
      },
      {
        name: 'Claude',
        icon: ClaudeIcon,
      },
      {
        name: 'MCP',
        icon: MCPIcon,
      },
      {
        name: 'Copilot',
        icon: CopilotIcon,
      },
      {
        name: 'ChatGPT',
        icon: ChatgptIcon,
      },
    ],
  },
  {
    section: 'Languages',
    items: [
      {
        name: 'Javascript',
        icon: JavascriptIcon,
      },
      {
        name: 'Typescript',
        icon: TypescriptIcon,
      },
      {
        name: 'HTML',
        icon: HtmlIcon,
      },
      {
        name: 'CSS',
        icon: CssIcon,
      },
      {
        name: 'Python',
        icon: PythonIcon,
      },
    ],
  },
  {
    section: 'Frameworks',
    items: [
      {
        name: 'React',
        icon: ReactIcon,
      },
      {
        name: 'Next.js',
        icon: NextjsIcon,
      },
      {
        name: 'Svelte',
        icon: SvelteIcon,
      },
      {
        name: 'Vue',
        icon: VueIcon,
      },
      {
        name: 'Nuxt',
        icon: NuxtIcon,
      },
    ],
  },
  {
    section: 'State Management',
    items: [
      {
        name: 'Redux',
        icon: ReduxIcon,
      },
      {
        name: 'Zustand',
        icon: ZustandIcon,
      },
      {
        name: 'Context API',
        icon: ContextApiIcon,
      },
      {
        name: 'Recoil',
        icon: RecoilIcon,
      },
      {
        name: 'VueX',
        icon: VueXIcon,
      },
    ],
  },
  {
    section: 'Styling',
    items: [
      {
        name: 'Tailwind CSS',
        icon: TailwindIcon,
      },
      {
        name: 'CSS Modules',
        icon: CssIcon,
      },
      {
        name: 'SASS',
        icon: SassIcon,
      },
      {
        name: 'Styled Components',
        icon: StyledComponentsIcon,
      },
    ],
  },
  {
    section: 'Testing',
    items: [
      {
        name: 'Jest',
        icon: JestIcon,
      },
      {
        name: 'React Testing Library',
        icon: ReactTestingLibraryIcon,
      },
      {
        name: 'Cypress',
        icon: CypressIcon,
      },
    ],
  },
  {
    section: 'Tools',
    items: [
      {
        name: 'GitHub',
        icon: GithubIcon,
      },
      {
        name: 'NPM',
        icon: NpmIcon,
      },
      {
        name: 'Webpack',
        icon: WebpackIcon,
      },
      {
        name: 'Vite',
        icon: ViteIcon,
      },
      {
        name: 'Eslint',
        icon: ESLintIcon,
      },
    ],
  },
  {
    section: 'CMS & APIs',
    items: [
      {
        name: 'Contentful',
        icon: ContentfulIcon,
      },
      {
        name: 'Sanity',
        icon: SanityIcon,
      },
      {
        name: 'Stripe',
        icon: StripeIcon,
      },
      {
        name: 'GraphQL',
        icon: GraphqlIcon,
      },
    ],
  },
  {
    section: 'Deployment',
    items: [
      {
        name: 'AWS',
        icon: AwsIcon,
      },
      {
        name: 'Vercel',
        icon: VercelIcon,
      },
      {
        name: 'Cloudflare',
        icon: CloudflareIcon,
      },
      {
        name: 'Firebase',
        icon: FirebaseIcon,
      },
      {
        name: 'Netlify',
        icon: NetlifyIcon,
      },
    ],
  },
];
export const services = [
  {
    number: '01',
    title: 'Custom Web Application Development',
    desc: 'From blank canvas to production-ready, I build fast, scalable, and maintainable frontend architectures using modern frameworks like React and Next.js.',
    icon: DevelopmentIcon,
  },
  {
    number: '02',
    title: 'UI Implementation & Component Systems',
    desc: 'Pixel-perfect, responsive interfaces built from design tools like Figma or Sketch. I also create reusable component libraries and design systems.',
    icon: DesignIcon,
  },
  {
    number: '03',
    title: 'SEO & Performance Optimization',
    desc: 'Speed matters—so does stability. I audit, optimize, and improve existing frontends, or advise teams on architecture, tooling, and best practices.',
    icon: SeoIcon,
  },
];
