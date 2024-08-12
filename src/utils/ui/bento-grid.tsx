import { cn } from "../cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link?: string;
  endIcons?: React.ReactNode;
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link,
  endIcons,
}: BentoGridItemProps) => {
  return (
    <a
      href={link}
      target="_blank"
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 bg-black border-white/[0.2] border justify-between flex flex-col space-y-4 max-md:space-y-0",
        className,
        link ? " cursor-pointer" : ""
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="flex justify-between w-full">
          {icon}
          {endIcons}
        </div>
        <div className="font-sans font-bold text-neutral-200 mb-2 mt-2 text-sm">
          {title}
        </div>
        <div className="font-sans font-normal text-xs text-neutral-300">
          {description}
        </div>
      </div>
    </a>
  );
};
