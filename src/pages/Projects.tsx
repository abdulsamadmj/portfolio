import { ProjectGrid } from "../components/projects-grid/ProjectGrid";
import fmsImage from "../assets/ss/fms.png";
import ttImage from "../assets/ss/tt.png";
import lvImage from "../assets/ss/lv.png";
import xoImage from "../assets/ss/xo.png";

import {
  IconSchool,
  IconExternalLink,
  IconCalculator,
  IconBrandGithub,
  IconHearts,
  IconDeviceGamepad,
  IconDeviceIpadHorizontalQuestion,
} from "@tabler/icons-react";
import { BentoGridItemProps } from "../utils/ui/bento-grid";

interface ProjectSkeletonProps {
  image?: string;
}

function Projects() {
  const Skeleton = ({ image }: ProjectSkeletonProps) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl text-white bg-gradient-to-br from-neutral-900 to-neutral-800">
      {image ? <img className="rounded-xl" src={image} /> : null}
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
        <a
          href="https://docs.google.com/document/d/1spmfMg1FMQHuuhR9Eg9rZo3UyUI0_pj4OXZj1mNnARw/edit?usp=sharing"
          target="_blank"
          className="text-neutral-500 text-xs font-normal flex gap-1 hover:underline"
        >
          Test Server Credentials
          <IconExternalLink className="h-4 w-4 text-neutral-500" />
        </a>
      ),
    },
    {
      title: "Steel Weight Calculator",
      description: "AI powered (gpt-4o) steel equipments weight calculator",
      header: <Skeleton />,
      icon: <IconCalculator className="h-4 w-4 text-neutral-500" />,
      endIcons: (
        <a
          href=""
          target="_blank"
          className="text-neutral-500 text-xs font-normal flex gap-1 hover:underline"
        >
          Webapp
          <IconExternalLink className="h-4 w-4 text-neutral-500" />
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
            <IconExternalLink className="h-4 w-4 text-neutral-500" />
          </a>
        </div>
      ),
    },
  ];

  const hobbyProjects: BentoGridItemProps[] = [
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
            <IconExternalLink className="h-4 w-4 text-neutral-500" />
          </a>
        </div>
      ),
    },
    {
      title: "X and O",
      description: (
        <p className="text-xs font-normal">
          Multiplayer & Offline Tic Tac Toe Game: Webapp
          <div className="bg-yellow-800 rounded-xl w-fit px-2">In Progress</div>
        </p>
      ),
      header: <Skeleton image={xoImage} />,
      icon: <IconDeviceGamepad className="h-4 w-4 text-neutral-500" />,
      endIcons: (
        <div className="text-neutral-500 text-xs font-normal flex gap-1 hover:underline">
          <a href="https://github.com/djx-community/xando-web" target="_blank">
            <IconBrandGithub className="h-4 w-4 text-neutral-500" />
          </a>
          <a href="https://xando-web.vercel.app/play-offline" target="_blank">
            <IconExternalLink className="h-4 w-4 text-neutral-500" />
          </a>
        </div>
      ),
    },
    {
      title: "Encuesta",
      description: (
        <p className="text-xs font-normal">
          Room Based Quiz Competition Mobile App: Flutter
          <div className="flex gap-1">
            <div className="bg-blue-800 rounded-xl w-fit px-2">
              Hacktoberfest 2022
            </div>
            <div className="bg-yellow-800 rounded-xl w-fit px-2">
              In Progress
            </div>
          </div>
        </p>
      ),
      header: <Skeleton />,
      icon: <IconDeviceIpadHorizontalQuestion className="h-4 w-4 text-neutral-500" />,
      endIcons: (
        <div className="text-neutral-500 text-xs font-normal flex gap-1 hover:underline">
          <a href="https://github.com/djx-community/encuesta" target="_blank">
            <IconBrandGithub className="h-4 w-4 text-neutral-500" />
          </a>
        </div>
      ),
    },
  ];

  return (
    <div
      className="pt-16 pb-28 flex flex-col gap-5"
      style={{
        backdropFilter: "blur(0px)", // added to eliminate text cache of project grid showing in background
      }}
    >
      {/* Core Projects */}
      <ProjectGrid items={coreProjects} title="Core Projects" />
      {/* Community Projects */}
      <ProjectGrid items={hobbyProjects} title="Community Projects" />
      {/* Freelance Projects */}
    </div>
  );
}

export default Projects;
