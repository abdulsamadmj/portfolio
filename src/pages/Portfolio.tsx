import { Link } from "react-router-dom";
import ProjectList from "../components/projects-list/ProjectList";
import { Timeline, TimelineEntry } from "../utils/ui/timeline";
import { IconExternalLink } from "@tabler/icons-react";
import CareerGrid from "../components/career-grid/CareerGrid";
import {
  careerAssetList,
  portfolioProjectsList,
  skillsList,
} from "../utils/Constants";
import SkillsList from "../components/skills-list/SkillsList";

function Portfolio() {
  const timelineData: TimelineEntry[] = [
    {
      title: "IT Engineer",
      subtitle: (
        <div>
          <Link
            to="https://jkskarate.com/"
            target="_blank"
            className="underline underline-offset-4 decoration-gray-800 hover:text-neutral-300"
          >
            <div className="flex items-center gap-1">
              JKS Academy
              <IconExternalLink className="text-gray-600" />
            </div>
          </Link>
          September 2023 - August 2024
        </div>
      ),
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Delivered cost-efficient IT solutions, enhancing organizational
            efficiency and reducing expenses by 80%. Developed and maintained
            dynamic websites and Odoo ERP systems for 2 partnering companies,
            ensuring seamless user experience.
          </p>
          <CareerGrid key="itEngineer" list={careerAssetList.itEngineer} />
        </div>
      ),
    },
    {
      title: "Front End Developer",
      subtitle: (
        <div>
          <Link
            to="https://dev-jsx.github.io/"
            target="_blank"
            className="underline underline-offset-4 decoration-gray-800 hover:text-neutral-300"
          >
            <div className="flex items-center gap-1">
              DJX (Freelance)
              <IconExternalLink className="text-gray-600" />
            </div>
          </Link>
          June 2022 - July 2023
        </div>
      ),
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Executed professional real-world projects (ERP, etc.), integrating
            latest technologies to deliver robust and scalable solutions.
          </p>
          <CareerGrid key="itEngineer" list={careerAssetList.djx} />
        </div>
      ),
    },
    {
      title: "BCA",
      subtitle: (
        <div>
          University of Calicut <br />
          August 2019 - March 2022
        </div>
      ),
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            CGPA: 7.45, Final Year Project: Tail-Tale (twitter in instagram UI
            😃), NSS Magazine Coordinator
          </p>
          <CareerGrid list={careerAssetList.bca} />
        </div>
      ),
    },
    {
      title: "Raspberry Pi Project",
      subtitle: (
        <div>
          Startup Mission Kerala <br />
          2016
        </div>
      ),
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Secured 3rd place in ’Learn to Code’ competition 2015 Startup
            Mission Kerala- Smart Home - Home Automation Project (Raspberry Pi)
          </p>
          <CareerGrid list={careerAssetList.rpi} />
        </div>
      ),
    },
  ];
  return (
    <div className="pt-16 pb-28 flex flex-col justify-center items-center text-neutral-400 backdrop-filter backdrop-blur-0">
      <div className="max-w-screen-md w-full p-5">
        <h6 className="text-xl text-white pb-2 font-semibold">
          Hello World 🙋🏻‍♂️!
        </h6>
        <p className="text-lg font-normal">
          I'm <b className="text-neutral-300">Abdul Samad</b>, a 23 y/o{" "}
          <b className="text-neutral-300">fullstack developer</b> from India
          (currently in <b className="text-neutral-300">Dubai, UAE</b>).
          Primarily work within the{" "}
          <b className="text-neutral-300">JavaScript</b> ecosystem, constantly
          expanding my skills by learning new technologies every day. <br />
          <br /> Currently I'm working for{" "}
          <a href="https://jkskarate.com/">
            <b className="text-neutral-300">JKS Academy</b>
          </a>{" "}
          and partners, building and maintaining cost efficient{" "}
          <b className="text-neutral-300">business solutions.</b>
        </p>
      </div>
      {/* Projects List */}
      <div className="max-w-screen-md w-full p-5 ">
        <h6 className="text-lg text-white pb-2 font-semibold">Projects</h6>
        <ProjectList projects={portfolioProjectsList} />
      </div>
      {/* skills List */}
      <div className="max-w-screen-md w-full p-5 ">
        <h6 className="text-lg text-white pb-2 font-semibold">Skills</h6>
        <SkillsList skills={skillsList} />
      </div>
      {/* Career Timeline */}
      <div className="max-w-screen-md w-full p-5 ">
        <h6 className="text-lg text-white pb-2 font-semibold">
          Career Timeline
        </h6>
        <Timeline data={timelineData} />
      </div>
    </div>
  );
}

export default Portfolio;
