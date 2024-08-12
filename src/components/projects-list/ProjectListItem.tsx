import { IconExternalLink } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

export interface ProjectListItemProps {
  title: string;
  description: string;
  link?: string;
  external?: boolean;
}

const ProjectListItem = ({
  title,
  description,
  link,
  external,
}: ProjectListItemProps) => {
  const [showIcon, setShowIcon] = React.useState<boolean>(false);
  const handleMouseEnter = () => {
    setShowIcon(true);
  };
  const handleMouseLeave = () => {
    setShowIcon(false);
  };
  external =
    external == undefined || external == null ? true : external ? true : false;
  return (
    <Link
      className="col-span-2 md:col-span-1"
      to={link!}
      // eslint-disable-next-line no-extra-boolean-cast
      target={external ? "_blank" : ""}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className="text-base text-neutral-300 underline-offset-4 decoration-gray-800 flex gap-1 underline mb-1">
        {title}
        {showIcon ? <IconExternalLink className="text-gray-600" /> : null}
      </p>
      <p className="text-sm font-normal no-underline">{description}</p>
    </Link>
  );
};

export default ProjectListItem;
