import { IconExternalLink } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export interface CareerListItemProps {
  company: string;
  date: string;
  position: string;
  link: string;
}

const CareerListItem = ({
  company,
  date,
  position,
  link,
}: CareerListItemProps) => {
  return (
    <div className="flex flex-col text-sm font-normal">
      <div className="flex justify-between">
        <Link
          to={link!}
          target="_blank"
          className="text-base text-neutral-300 underline-offset-4 decoration-gray-800 flex gap-1 underline mb-1"
        >
          {company}
          <IconExternalLink className="text-gray-600" />
        </Link>
        <p>{date}</p>
      </div>
      <p>{position}</p>
    </div>
  );
};

export default CareerListItem;
