import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  mahway,
  motiondesk,
  Mobilehome,
  tickets,
  WordPress,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "FullStack Developer",
    company_name: "Mah Way",
    icon: mahway,
    iconBg: "#383E56",
    date: "2019 - 2021",
    points: [
      "Building and developing WordPress templates.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Node.js Developer",
    company_name: "MotionDesk",
    icon: motiondesk,
    iconBg: "#E6DEDD",
    date: "2020 - present",
    points: [
      "My main activity includes creating graphic plugins for Adobe software.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Mobile home",
    description:
      "Mobile House is an online store platform designed for mobile phone business owners and provides a convenient platform for bulk mobile phone purchases and instant price evaluation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Mobilehome,
    source_code_link: "https://github.com/",
  },
  {
    name: "Selling cinema tickets",
    description:
      "The online cinema ticket sales platform allows users to easily buy the movie ticket of their choice and choose their seats in the cinema hall. This platform also allows you to watch movies online.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tickets,
    source_code_link: "https://github.com/",
  },
  {
    name: "WordPress theme",
    description:
      "This WordPress website is multipurpose and uses WooCommerce and Easy Digital Downloads plugins. Developing this project was a pleasant and useful experience for me.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
    ],
    image: WordPress,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
