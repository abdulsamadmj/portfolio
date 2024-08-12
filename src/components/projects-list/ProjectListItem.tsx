import { IconExternalLink } from "@tabler/icons-react";
import React from "react";

export interface ProjectListItemProps {
  title: string;
  description: string;
  link?: string;
}

const ProjectListItem = ({
  title,
  description,
  link,
}: ProjectListItemProps) => {
  const [showIcon, setShowIcon] = React.useState<boolean>(false);
  const handleMouseEnter = () => {
    setShowIcon(true);
  };
  const handleMouseLeave = () => {
    setShowIcon(false);
  };
  return (
    <a
      className="col-span-2 md:col-span-1"
      href={link}
      target="_blank"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className="text-base text-neutral-300 underline-offset-4 decoration-gray-800 flex gap-1 underline mb-1">
        {title}
        {showIcon ? <IconExternalLink className="text-gray-600" /> : null}
      </p>
      <p className="text-sm font-normal no-underline">{description}</p>
    </a>
  );
};

export default ProjectListItem;
