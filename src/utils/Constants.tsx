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
