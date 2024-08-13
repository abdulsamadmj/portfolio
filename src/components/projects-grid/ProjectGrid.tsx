// import { cn } from "../../utils/cn";
// import React from "react";
import {
  BentoGrid,
  BentoGridItem,
  BentoGridItemProps,
} from "../../utils/ui/bento-grid";

export interface ProjectGridProps {
  items: BentoGridItemProps[];
  title?: string;
}

export function ProjectGrid({ items, title }: ProjectGridProps) {
  return (
    <BentoGrid className="max-w-4xl mx-auto w-full p-5">
      {title ? (
        <p className="col-span-full text-white text-xl">{title}</p>
      ) : null}
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          link={item.link}
          endIcons={item.endIcons}
        />
      ))}
    </BentoGrid>
  );
}
