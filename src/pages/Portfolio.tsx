import CareerList from "../components/career-list/CareerList";
import { CareerListItemProps } from "../components/career-list/CareerListItem";
import ProjectList from "../components/projects-list/ProjectList";
import { ProjectListItemProps } from "../components/projects-list/ProjectListItem";

function Portfolio() {
  const projects: ProjectListItemProps[] = [
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
      title: "Loverse - Generate Rhyming Love Poems",
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

  const jobs: CareerListItemProps[] = [
    {
      company: "JKS Academy",
      date: "Oct 2023 - Present",
      position: "IT Engineer",
      link: "https://instagram.com/jksacademy2023/",
    },
    {
      company: "DJX (Freelance)",
      date: "Jun 2022 - Jul 2023",
      position: "Front End Developer",
      link: "https://instagram.com/dev_jsx/",
    },
  ];
  return (
    <div
      className="pt-16 pb-28 flex flex-col justify-center items-center text-neutral-400 backdrop-filter backdrop-blur-0"
    >
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
      <div className="max-w-screen-md w-full p-5 ">
        <h6 className="text-lg text-white pb-2 font-semibold">Projects</h6>
        <ProjectList projects={projects} />
      </div>
      <div className="max-w-screen-md w-full p-5 ">
        <h6 className="text-lg text-white pb-2 font-semibold">Career</h6>
        <CareerList list={jobs} />
      </div>
    </div>
  );
}

export default Portfolio;
