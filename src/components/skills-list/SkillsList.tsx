export interface SkillsListItemProps {
  name: string;
  className: string;
}

export interface SkillsListProps {
  skills: SkillsListItemProps[];
}

const SkillsList = ({ skills }: SkillsListProps) => {
  return (
    <div className="flex gap-2 items-center flex-wrap">
      {skills.map((skill, index) => {
        return (
          <span
            key={index}
            className={`text-sm font-mono text-black ${skill.className} p-2 rounded-md`}
          >
            {skill.name}
          </span>
        );
      })}
    </div>
  );
};

export default SkillsList;
