import { ProjectGrid } from "../components/projects-grid/ProjectGrid";
import fmsImage from "../assets/ss/fms.png";
import ttImage from "../assets/ss/tt.png";
import lvImage from "../assets/ss/lv.png";
import xoImage from "../assets/ss/xo.png";
import alImage from "../assets/ss/al.png";
import prImage from "../assets/ss/pr.png";
import safImage from "../assets/ss/saf.png";
import todoImage from "../assets/ss/todo.png";
import nfImage from "../assets/ss/nf.png";
import mzCalcImage from "../assets/ss/mz-calc.png";
import bmvImage from "../assets/ss/bmv.png";
import chImage from "../assets/ss/ch.jpg"

import {
  IconSchool,
  IconWorldWww,
  IconCalculator,
  IconBrandGithub,
  IconHearts,
  IconDeviceGamepad,
  IconDeviceIpadHorizontalQuestion,
  IconBallpen,
  IconStethoscope,
  IconBuildingSkyscraper,
  IconBrandFigma,
  IconPhotoScan,
  IconShoppingCart,
  IconListDetails,
  IconBrandNetflix,
  IconKey,
  IconBuildingMosque,
} from "@tabler/icons-react";
import { BentoGridItemProps } from "../utils/ui/bento-grid";

interface ProjectSkeletonProps {
  image?: string;
}

function Projects() {
  const Skeleton = ({ image }: ProjectSkeletonProps) => (
    <div className="hidden md:flex flex-1 w-full h-full min-h-[6rem] rounded-xl text-white bg-gradient-to-br from-neutral-900 to-neutral-800">
      {image ? <img className="rounded-xl object-cover" src={image} /> : null}
    </div>
  );

  const coreProjects: BentoGridItemProps[] = [
    {
      title: "FMS - College ERP",
      description:
        "A custom digital platform from inception to automate office and departmental processes.",
      header: <Skeleton image={fmsImage} />,
      icon: <IconSchool className="h-4 w-4 text-neutral-500" />,
      endIcons: (
        <div className="text-neutral-500 text-xs font-normal flex gap-1 hover:underline">
          <a
            href="https://www.figma.com/design/godndSMrji7IfrXh0DEsxE/FMS?node-id=5259-88588&t=osX1ht9F1FcrqFOj-1"
            target="_blank"
          >
            <IconBrandFigma className="h-4 w-4 text-neutral-500" />
          </a>
          <a
            href="https://docs.google.com/document/d/1spmfMg1FMQHuuhR9Eg9rZo3UyUI0_pj4OXZj1mNnARw/edit?usp=sharing"
            target="_blank"
            className="text-neutral-500 text-xs font-normal flex gap-1 hover:underline"
          >
            Test Server Credentials
            <IconKey className="h-4 w-4 text-neutral-500" />
          </a>
        </div>
      ),
    },
    {
      title: "Steel Weight Calculator (Beta)",
      description: (
        <div className="text-xs font-normal">
          AI powered steel equipments weight calculator
          <div className="bg-yellow-800 rounded-xl w-fit px-2 inline">
            In Progress
          </div>
        </div>
      ),
      header: <Skeleton image={mzCalcImage} />,
      icon: <IconCalculator className="h-4 w-4 text-neutral-500" />,
      endIcons: (
        <a
          href="https://calculator.metalzoneuae.com"
          target="_blank"
          className="text-neutral-500 text-xs font-normal flex gap-1 hover:underline"
        >
          <IconWorldWww className="h-4 w-4 text-neutral-500" />
        </a>
      ),
    },
    {
      title: "Tail-Tale",
      description:
        "Tale Sharing Web App: Twitter on Instagram UI - Did Before Threads wasn't a thing ofc🙂",
      header: <Skeleton image={ttImage} />,
      icon: <p className="text-xs text-neutral-500">t</p>,
      endIcons: (
        <div className="text-neutral-500 text-xs font-normal flex gap-1 hover:underline">
          <a href="https://github.com/abdulsamadmj/tail-tale" target="_blank">
            <IconBrandGithub className="h-4 w-4 text-neutral-500" />
          </a>
          <a href="https://tail-tale.vercel.app/" target="_blank">
            <IconWorldWww className="h-4 w-4 text-neutral-500" />
          </a>
        </div>
      ),
    },
  ];

  const communityProjects: BentoGridItemProps[] = [
    {
      title: "ചോറുള്ളപള്ളി.in",
      description: "Find Masjids/Mahals that provide Iftar",
      header: <Skeleton image={chImage}/>,
      icon: <IconBuildingMosque className="h-4 w-4 text-neutral-500" />,
      endIcons: (
        <div className="text-neutral-500 text-xs font-normal flex gap-1 hover:underline">
          <a href="https://chorullapalli.in/" target="_blank">
            <IconWorldWww className="h-4 w-4 text-neutral-500" />
          </a>
        </div>
      ),
    },
    {
      title: "Loverse",
      description:
        "AI powered poem writing and export as image: Webapp for Valentines day",
      header: <Skeleton image={lvImage} />,
      icon: <IconHearts className="h-4 w-4 text-neutral-500" />,
      endIcons: (
        <div className="text-neutral-500 text-xs font-normal flex gap-1 hover:underline">
          <a href="https://github.com/djx-community/love-verse" target="_blank">
            <IconBrandGithub className="h-4 w-4 text-neutral-500" />
          </a>
          <a href="https://love-verse-cl3.pages.dev/" target="_blank">
            <IconWorldWww className="h-4 w-4 text-neutral-500" />
          </a>
        </div>
      ),
    },
    {
      title: "X and O",
      description: (
        <div className="text-xs font-normal">
          Multiplayer & Offline Tic Tac Toe Game.
          <div className="bg-yellow-800 rounded-xl w-fit px-2">In Progress</div>
        </div>
      ),
      header: <Skeleton image={xoImage} />,
      icon: <IconDeviceGamepad className="h-4 w-4 text-neutral-500" />,
      endIcons: (
        <div className="text-neutral-500 text-xs font-normal flex gap-1 hover:underline">
          <a href="https://github.com/djx-community/xando-web" target="_blank">
            <IconBrandGithub className="h-4 w-4 text-neutral-500" />
          </a>
          <a href="https://xando-web.vercel.app/play-offline" target="_blank">
            <IconWorldWww className="h-4 w-4 text-neutral-500" />
          </a>
        </div>
      ),
    },
    {
      title: "Encuesta",
      description: (
        <div className="text-xs font-normal">
          Room Based Quiz Competition Mobile App.
          <div className="flex gap-1">
            <div className="bg-blue-800 rounded-xl w-fit px-2">
              Hacktoberfest 2022
            </div>
            <div className="bg-yellow-800 rounded-xl w-fit px-2">
              In Progress
            </div>
          </div>
        </div>
      ),
      header: <Skeleton />,
      icon: (
        <IconDeviceIpadHorizontalQuestion className="h-4 w-4 text-neutral-500" />
      ),
      endIcons: (
        <div className="text-neutral-500 text-xs font-normal flex gap-1 hover:underline">
          <a
            href="https://www.figma.com/design/jl3uniUJAEZNfkpcIhgBp3/Wireframe?node-id=0-1&t=Vo8WDiSG1c0oLvK0-1"
            target="_blank"
          >
            <IconBrandFigma className="h-4 w-4 text-neutral-500" />
          </a>
          <a href="https://github.com/djx-community/encuesta" target="_blank">
            <IconBrandGithub className="h-4 w-4 text-neutral-500" />
          </a>
        </div>
      ),
    },
  ];

  const freelanceProjects: BentoGridItemProps[] = [
    {
      title: "PRAZI Website",
      description:
        "Official Website of Prazi Medical & Surgical Devices Manufacturing LLC, Dubai, UAE",
      header: <Skeleton image={prImage} />,
      icon: <IconStethoscope className="h-4 w-4 text-neutral-500" />,
      endIcons: (
        <div className="text-neutral-500 text-xs font-normal flex gap-1 hover:underline">
          <a href="https://prazi.ae/" target="_blank">
            <IconWorldWww className="h-4 w-4 text-neutral-500" />
          </a>
        </div>
      ),
    },
    {
      title: "Safin Aluminium & Glass, Website",
      description: "Official Website of Safin Aluminium & Glass, Sharjah, UAE",
      header: <Skeleton image={safImage} />,
      icon: <IconBuildingSkyscraper className="h-4 w-4 text-neutral-500" />,
      endIcons: (
        <div className="text-neutral-500 text-xs font-normal flex gap-1 hover:underline">
          <a
            href="https://www.figma.com/design/AJy84cBELyXfk417IxXbeF/Safin-glass-website?node-id=0-1&t=kTLqgOrVWlnGOBgo-1"
            target="_blank"
          >
            <IconBrandFigma className="h-4 w-4 text-neutral-500" />
          </a>
          <a href="https://safinglass.com/" target="_blank">
            <IconWorldWww className="h-4 w-4 text-neutral-500" />
          </a>
        </div>
      ),
    },
    {
      title: "Alumni WMOC Official Website",
      description:
        "Official Website of Alumni Association WMO Arts & Science College, Muttil, Wayanad",
      header: <Skeleton image={alImage} />,
      icon: <IconBallpen className="h-4 w-4 text-neutral-500" />,
      endIcons: (
        <div className="text-neutral-500 text-xs font-normal flex gap-1 hover:underline">
          <a href="http://alumni.wmocollege.ac.in/" target="_blank">
            <IconWorldWww className="h-4 w-4 text-neutral-500" />
          </a>
        </div>
      ),
    },
  ];

  const hobbyProjects: BentoGridItemProps[] = [
    {
      title: "Be My Valentine ?",
      description: "Ask out your crush on Valentine's Day: They can't say no!",
      header: <Skeleton image={bmvImage} />,
      icon: <IconHearts className="h-4 w-4 text-neutral-500" />,
      endIcons: (
        <div className="text-neutral-500 text-xs font-normal flex gap-1 hover:underline">
          <a
            href="https://github.com/abdulsamadmj/bemyvalentine"
            target="_blank"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-500" />
          </a>
          <a href="https://bemyvalentine-delta.vercel.app/" target="_blank">
            <IconWorldWww className="h-4 w-4 text-neutral-500" />
          </a>
        </div>
      ),
    },
    {
      title: "Image Recognition App: Flutter",
      description:
        "Simple AI Image Recognition App for finding product based on image input using TFlite",
      header: <Skeleton />,
      icon: <IconPhotoScan className="h-4 w-4 text-neutral-500" />,
      endIcons: (
        <div className="text-neutral-500 text-xs font-normal flex gap-1 hover:underline">
          <a
            href="https://github.com/abdulsamadmj/image-to-product"
            target="_blank"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-500" />
          </a>
        </div>
      ),
    },
    {
      title: "E-commerce Website using NodeJS",
      description: "E-commerce Web app made during web development series",
      header: <Skeleton />,
      icon: <IconShoppingCart className="h-4 w-4 text-neutral-500" />,
      endIcons: (
        <div className="text-neutral-500 text-xs font-normal flex gap-1 hover:underline">
          <a
            href="https://github.com/abdulsamadmj/e-comm-website-sample"
            target="_blank"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-500" />
          </a>
        </div>
      ),
    },
    {
      title: "Simple ToDO App using ReactJS",
      description:
        "Beginner level React to-do app, done while learning ReactJS.",
      header: <Skeleton image={todoImage} />,
      icon: <IconListDetails className="h-4 w-4 text-neutral-500" />,
      endIcons: (
        <div className="text-neutral-500 text-xs font-normal flex gap-1 hover:underline">
          <a href="https://github.com/abdulsamadmj/to-do-app" target="_blank">
            <IconBrandGithub className="h-4 w-4 text-neutral-500" />
          </a>
          <a href="https://abdulsamadmj.github.io/to-do-app/" target="_blank">
            <IconWorldWww className="h-4 w-4 text-neutral-500" />
          </a>
        </div>
      ),
    },
    {
      title: "Netflix UI Clone: Using ReactJS & bootstrap",
      description:
        "Beginner level React app netflix-clone, done while learning ReactJS",
      header: <Skeleton image={nfImage} />,
      icon: <IconBrandNetflix className="h-4 w-4 text-neutral-500" />,
      endIcons: (
        <div className="text-neutral-500 text-xs font-normal flex gap-1 hover:underline">
          <a
            href="https://github.com/abdulsamadmj/netflix-clone"
            target="_blank"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-500" />
          </a>
          <a
            href="https://abdulsamadmj.github.io/netflix-clone/"
            target="_blank"
          >
            <IconWorldWww className="h-4 w-4 text-neutral-500" />
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="pt-16 pb-28 flex flex-col gap-5 backdrop-filter backdrop-blur-0">
      {/* Core Projects */}
      <ProjectGrid items={coreProjects} title="Core Projects" />
      {/* Community Projects */}
      <ProjectGrid items={communityProjects} title="Community Projects" />
      {/* Freelance Projects */}
      <ProjectGrid items={freelanceProjects} title="Freelance Projects" />
      {/* Hobby Projects */}
      <ProjectGrid
        items={hobbyProjects}
        title="Hobby & Beginner Level Projects"
      />
    </div>
  );
}

export default Projects;
