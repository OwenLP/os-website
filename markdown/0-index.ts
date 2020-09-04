// All posts

export type Post = {
  id: number,
  number: string,
  slug: string,
  isLab: boolean | null,
  onSite: boolean, // within /labs URL
  filename: string,
  date: string,
  coolness: number,
  difficulty: string,
  tags: Array<string>,
  tech: Array<string>,
  title: string,
  cover: string,
  description: string,
}

const posts: Array<Post> = [
  {
    id: 0,
    number: '000',
    slug: "css-colour-functions",
    isLab: false,
    onSite: null,
    filename: "000-zcss-colours",
    date: "Jul 14, 2020",
    coolness: 2,
    difficulty: "medium",
    tags: ["web", "design"],
    tech: ["Any Tech", "CSS"],
    title: "In Depth Guide to CSS Colours & Functions",
    cover: "covers/css-colours.png",
    description: "A quick and basic run through of the native CSS colour functions available, no plugins",
  },
  {
    id: 1,
    number: '001',
    slug: "web-apis-gallery",
    isLab: true,
    onSite: true,
    filename: "001-web-apis",
    date: "Jul 24, 2020",
    coolness: 3,
    difficulty: "easy",
    tags: ["gallery", "web"],
    tech: ["Any Tech", "api", "CSS"],
    title: "Built-in Web API Specifications Gallery",
    cover: "covers/web-apis.png",
    description: "Exploring the more popular and widely adapted Web APIs, all natively supported in browser",
  },
  {
    id: 2,
    number: '002',
    slug: "component-compiler-with-node",
    isLab: true,
    onSite: true,
    filename: "002-comp-maker",
    date: "Jul 30, 2020",
    coolness: 4,
    difficulty: "hard",
    tags: ["tools", "framework", "experimental"],
    tech: ["Any Tech", "NodeJS", "CSS"],
    title: "Building a \"Component Compiler\" for the Web with NodeJS",
    cover: "covers/component-compiler.png",
    description: "Trying out an idea I had to input extremely basic syntax and have it spit out components",
  },
  {
    id: 3,
    number: '003',
    slug: "uses",
    isLab: true,
    onSite: false,
    filename: "003-uses",
    date: "Aug 3, 2020",
    coolness: 1,
    difficulty: "easy",
    tags: ["productivity", "tools"],
    tech: ["Any Tech", "Tailwind"],
    title: "Uses: Hardware",
    cover: "covers/uses.png",
    description: "My uses page, with as much hardware tools I could think used frequently",
  },
  {
    id: 4,
    number: '004',
    slug: "//d2ml5pl4d66ya9.cloudfront.net/playground",
    isLab: true,
    onSite: false,
    filename: "004-graphql-me",
    date: "Aug 7, 2020",
    coolness: 2,
    difficulty: "medium",
    tags: ["data", "fun"],
    tech: ["Any Tech", "React", "GraphQL", "Apollo"],
    title: "Exposing Your \"About Me\" as a GraphQL Endpoint",
    cover: "covers/aboutme-graphql.png",
    description: "Put your public information out there in the form of a graphQL playground for the world",
  },
  {
    id: 5,
    number: '005',
    slug: "productivity-and-developer-plugins-for-alfred",
    isLab: false,
    onSite: null,
    filename: "005-alfred-tools",
    date: "Aug 11, 2020",
    coolness: 2,
    difficulty: "easy",
    tags: ["productivity", "tools", "software"],
    tech: [],
    title: "Productivity & Developer Plugins for Alfred",
    cover: "covers/alfred.png",
    description: "Going through some of the most beneficial Alfred plugins that save so much time",
  },
  {
    id: 6,
    number: '06',
    slug: "crypto-dashboard",
    isLab: true,
    onSite: true,
    filename: "006-crypto-dash",
    date: "Aug 20, 2020",
    coolness: 3,
    difficulty: "hard",
    tags: ["data", "api", "project"],
    tech: ["Any Tech", "NextJS", "React"],
    title: "Crypto Briefing Dashboard with Node, Redis & React",
    cover: "covers/buck-net.png",
    description: "Using the vast amounts of financial data out there, this project builds a crypto dashboard overview",
  },
  {
    id: 7,
    number: '007',
    slug: "morning-briefing",
    isLab: true,
    onSite: true,
    filename: "007-morning-brief",
    date: "Aug 29, 2020",
    coolness: 4,
    difficulty: "easy",
    tags: ["web", "project"],
    tech: ["Any Tech", "NextJS", "NodeJS", "React"],
    title: "Morning Briefing Dashboard with React & NextJS",
    cover: "covers/morning-briefing.png",
    description: "A browser homepage dashboard, this project connects some tailored APIs for a quick briefing",
  },
]

export default posts

// {
//   id: 0,
//   number: '000',
//   slug: "frontend-interview-questions-and-answers",
//   isLab: false,
//   filename: "000-qna-frontend",
//   date: "Jul 9, 2020",
//   coolness: 2,
//   difficulty: "medium",
//   tags: ["web", "frontend"],
//   tech: [],
//   title: "Frontend Interview Q&A",
//   cover: "https://picsum.photos/1440/900",
//   description: "Going over this giant list of frontend interview questions, and answering them",
// },
// {
//   id: 0,
//   number: '000',
//   slug: "ui-animations-with-framer-motion",
//   isLab: true,
//   filename: "000-framer-gallery",
//   date: "Jul 3, 2020",
//   coolness: 3,
//   difficulty: "easy",
//   tags: ["web", "animation", "gallery"],
//   tech: ["Any Tech", "React", "Framer Motion"],
//   title: "UI Animations with Framer Motion",
//   cover: "https://picsum.photos/1440/900",
//   description: "Actual use-case examples of framer motion, specifically for UI interactions",
// },
// {
//   id: 3,
//   number: '003',
//   slug: "geofire-ui-kit",
//   isLab: true,
//   filename: "003-geofire",
//   date: "Jul 17, 2020",
//   coolness: 5,
//   difficulty: "easy",
//   tags: ["animation", "fun", "experimental"],
//   tech: ["Any Tech", "React", "Sass"],
//   title: "Geofire UI: A React-Based, \"Geocities Style\" UI Kit",
//   cover: "https://picsum.photos/1440/900",
//   description: "Throwback to the golden era of the web with this atrocious yet fun UI kit",
// },
// {
//   id: 5,
//   number: '005',
//   slug: "component-compiler-with-rust",
//   isLab: true,
//   filename: "005-component-maker",
//   date: "Jul 30, 2020",
//   coolness: 3,
//   difficulty: "hard",
//   tags: ["tools", "framework", "experimental"],
//   tech: ["Any Tech", "Rust", "CSS"],
//   title: "Building a \"Component Compiler\" for the Web with Rust",
//   cover: "https://picsum.photos/1440/900",
//   description: "Trying out an idea I had to input extremely basic syntax and have it spit out components",
// },
