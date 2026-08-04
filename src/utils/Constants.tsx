import { CareerGridItemProps } from "../components/career-grid/CareerGridItem";
import { ProjectListItemProps } from "../components/projects-list/ProjectListItem";
import {
  IconBrandGithubFilled,
  IconBrandYoutubeFilled,
} from "@tabler/icons-react";
import jksOfficial from "../assets/ss/jks-off.png";
import jksAjman from "../assets/ss/jks-aj.png";
import mzOfficial from "../assets/ss/mz-off.png";
import mzCalc from "../assets/ss/mz-calc.png";
import rpiVideo from "../assets/ss/smart-home.png";
import fmsErp from "../assets/ss/fms.png";
import alumniWmoc from "../assets/ss/al.png";
import prazi from "../assets/ss/pr.png";
import safin from "../assets/ss/saf.png";
import tailTale from "../assets/ss/tt.png";
import nss from "../assets/ss/nss.png";
import jeem from "../assets/ss/jeem.png";
import ork from "../assets/ss/ork.png";
import menuat from "../assets/ss/menuat.png";
import carssat from "../assets/ss/carss.png";
import { SkillsListItemProps } from "../components/skills-list/SkillsList";

export const portfolioProjectsList: ProjectListItemProps[] = [
  {
    title: "QSense (Snapdragon Hackathon Winner)",
    description: "Edge AI-powered industrial safety and predictive maintenance system built for MSME manufacturing environments.",
    link: "https://github.com/VibeCheck-Q/QSense-Web"
  },
  {
    title: "Ork (From Bytsolv)",
    description:
      "A simple, elegant journaling app designed to help you reflect, grow, and stay mindful.",
    link: "https://ork.so/",
  },
  {
    title: "TinkerSpace #Wrapped2025",
    description:
      "Community members' Activities & Events attended and hosted in the past year summarised",
    link: "https://space-wrapped.vercel.app/",
  },
  {
    title: "ചോറുള്ളപള്ളി.in",
    description: "Find Masjids/Mahals that provide Iftar",
    link: "https://chorullapalli.in/",
  },
  {
    title: "Explore More",
    description: "",
    link: "/projects",
    external: false,
  },
];

type CareerKeys = "softwareEngineer" | "itEngineer" | "djx" | "bca" | "rpi";

export const careerAssetList: {
  [key in CareerKeys]: CareerGridItemProps[];
} = {
  softwareEngineer: [
    {
      link: {
        href: "https://carss.at/",
        external: true,
      },
      subtitle: "Carss.at",
      image: carssat,
    },
    {
      link: {
        href: "https://ork.so/",
        external: true,
      },
      subtitle: "Ork: Life Logged",
      image: ork,
    },
    {
      link: {
        href: "https://menuu.at/",
        external: true,
      },
      subtitle: "Menuu.at",
      image: menuat,
    },
    {
      link: {
        href: "https://jeem.so/",
        external: true,
      },
      subtitle: "Jeem OS",
      image: jeem,
    },
  ],
  itEngineer: [
    {
      link: {
        href: "https://ajman.jkskarate.com/",
        external: true,
      },
      subtitle: "JKS Academy | Ajman",
      image: jksAjman,
    },
    {
      link: {
        href: "https://jkskarate.com/",
        external: true,
      },
      subtitle: "JKS Academy Official Website",
      image: jksOfficial,
    },
    {
      // TODO: integrate to single project page
      link: null,
      image: mzCalc,
    },
    {
      link: {
        href: "https://metalzoneuae.com/",
        external: true,
      },
      subtitle: "Metal Zone Official Website",
      image: mzOfficial,
    },
  ],
  djx: [
    {
      // TODO: integrate to single project page
      link: {
        href: "https://docs.google.com/document/d/1spmfMg1FMQHuuhR9Eg9rZo3UyUI0_pj4OXZj1mNnARw/edit?usp=sharing",
        external: true,
      },
      subtitle: "FMS - College ERP",
      image: fmsErp,
    },
    {
      link: {
        href: "http://alumni.wmocollege.ac.in",
        external: true,
      },
      subtitle: "Alumni WMOC Website",
      image: alumniWmoc,
    },
    {
      link: {
        href: "https://prazi.ae/",
        external: true,
      },
      subtitle: "Prazi AE website",
      image: prazi,
    },
    {
      link: {
        href: "https://safinglass.com/",
        external: true,
      },
      subtitle: "SafinGlass Website",
      image: safin,
    },
  ],
  bca: [
    {
      // TODO: integrate to single project page
      link: {
        href: "https://github.com/abdulsamadmj/tail-tale",
        external: true,
      },
      subtitle: "Tail-Tale Github Repo",
      image: tailTale,
      icon: <IconBrandGithubFilled className="text-white" />,
    },
    {
      link: {
        href: "https://nss-magazine-wmoc.web.app/",
        external: true,
      },
      subtitle: "NSS Magazine",
      image: nss,
    },
  ],
  rpi: [
    {
      image: rpiVideo,
      link: {
        href: "https://www.youtube.com/watch?v=4KZtYeh83I8",
        external: true,
      },
      subtitle: "Smart Home Project Video",
      icon: <IconBrandYoutubeFilled className="text-red-500" />,
    },
  ],
};

export const skillsList: SkillsListItemProps[] = [
  {
    name: "Javascript",
    className: "bg-yellow-500",
  },
  {
    name: "Typescript",
    className: "bg-blue-500 text-white",
  },
  {
    name: "React",
    className: "bg-blue-500 text-white",
  },
  {
    name: "Next.js",
    className: "bg-white",
  },
  {
    name: "Node.js",
    className: "bg-green-500",
  },
  {
    name: "Astro.JS",
    className: "bg-red-500 text-white",
  },
  {
    name: "Svelte",
    className: "bg-orange-500",
  },
  {
    name: "Strapi CMS",
    className: "bg-violet-700 text-white",
  },
  {
    name: "MongoDB",
    className: "bg-green-500",
  },
  {
    name: "PostgreSQL",
    className: "bg-blue-500",
  },
  {
    name: "Prisma",
    className: "bg-white",
  },
  {
    name: "Tailwind",
    className: "bg-blue-500 text-white",
  },
  {
    name: "HTML",
    className: "bg-blue-500",
  },
  {
    name: "CSS",
    className: "bg-yellow-500",
  },
  {
    name: "Python",
    className: "bg-yellow-500 text-white",
  },
  {
    name: "Git",
    className: "bg-red-500",
  },
  {
    name: "Linux",
    className: "bg-yellow-500",
  },
  {
    name: "Material UI",
    className: "bg-blue-500",
  },
  {
    name: "UI/UX",
    className: "bg-red-500",
  },
  {
    name: "Socket IO",
    className: "bg-white",
  },
  {
    name: "Google Cloud",
    className: "bg-blue-500",
  },
  {
    name: "Redis",
    className: "bg-red-500 text-white",
  },
  {
    name: "AWS EC2",
    className: "bg-orange-500",
  },
  {
    name: "Drizzle ORM",
    className: "bg-purple-800 text-white",
  },
  {
    name: "Odoo ERP",
    className: "bg-violet-500 text-white",
  },
  {
    name: "LLM Prompting",
    className: "bg-white",
  },
  {
    name: "Firebase",
    className: "bg-orange-500",
  },
  {
    name: "ChatGPT API",
    className: "bg-white",
  },
  {
    name: "ERPNext",
    className: "bg-blue-500 text-white",
  },
  {
    name: "Frappe",
    className: "bg-white",
  },
  {
    name: "MariaDB",
    className: "bg-orange-500 text-white",
  },
  {
    name: "PostgreSQL",
    className: "bg-blue-500 text-white",
  },
  {
    name: "Tanstack: Router, Query, Table",
    className: "bg-red-500 text-white",
  },
  {
    name: "Hono",
    className: "bg-orange-500 text-white",
  },
  {
    name: "Vibe Coding",
    className: "bg-purple-500 text-white",
  },
  {
    name: "Cloudflare",
    className: "bg-orange-500 text-black"
  },
  {
    name: "Django",
    className: "bg-blue-500 text-yellow-300"
  },
  {
    name: "Expo (React Native)",
    className: "bg-gray-500 text-white"
  },
  {
    name: "Three.JS",
    className: "bg-white text-black"
  }
];

export const LINKEDIN_URL = "https://www.linkedin.com/in/abdulsamadmj/";
export const GITHUB_URL = "https://github.com/abdulsamadmj";
export const TINKERHUB_URL = "https://tinkerhub.org/@abdulsamadmj";
