import { CareerGridItemProps } from "../components/career-grid/CareerGridItem";
import { ProjectListItemProps } from "../components/projects-list/ProjectListItem";
import jksOfficial from "../assets/ss/jks-off.png";
import jksAjman from "../assets/ss/jks-aj.png";
import mzOfficial from "../assets/ss/mz-off.png";
import mzCalc from "../assets/ss/mz-calc.png";

export const portfolioProjectsList: ProjectListItemProps[] = [
  {
    title: "FMS - College ERP",
    description:
      "A custom digital platform from inception to automate office and departmental processes.",
    link: "https://docs.google.com/document/d/1spmfMg1FMQHuuhR9Eg9rZo3UyUI0_pj4OXZj1mNnARw/edit?usp=sharing",
  },
  {
    title: "Steel Weight Calculator (Beta)",
    description: "AI powered (gpt-4o) steel equipments weight calculator",
    link: "https://calculator.metalzoneuae.com",
  },
  {
    title: "LoVerse - Generate Rhyming Love Poems",
    description:
      "AI powered poem writing and export as image: Webapp for Valentines day",
    link: "https://love-verse-cl3.pages.dev/",
  },
  {
    title: "PRAZI Website",
    description:
      "Official Website of Prazi Medical & Surgical Devices Manufacturing LLC, Dubai, UAE",
    link: "https://prazi.ae/",
  },
  {
    title: "Explore More",
    description: "",
    link: "/projects",
    external: false,
  },
];

type CareerKeys = "itEngineer" | "djx" | "bca" | "rpi";

export const careerAssetList: {
  [key in CareerKeys]: CareerGridItemProps[];
} = {
  itEngineer: [
    {
      link: {
        href: "https://ajman.jkskarate.com/",
        external: true,
      },
      image: jksAjman,
    },
    {
      link: {
        href: "https://jkskarate.com/",
        external: true,
      },
      image: jksOfficial,
    },
    {
      link: null,
      image: mzCalc,
    },
    {
      link: {
        href: "https://metalzoneuae.com/",
        external: true,
      },
      image: mzOfficial,
    },
  ],
  djx: [],
  bca: [],
  rpi: [],
};
