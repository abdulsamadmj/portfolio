import ProjectListItem, { ProjectListItemProps } from "./ProjectListItem";

interface ProjectListProps {
  projects: ProjectListItemProps[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className="grid grid-cols-2 gap-5">
      {projects.map((project, index) => (
        <ProjectListItem
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default ProjectList;
