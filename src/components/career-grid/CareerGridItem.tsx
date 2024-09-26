import { IconExternalLink } from "@tabler/icons-react";

export interface CareerGridItemProps {
  link: {
    href: string;
    external?: boolean;
  } | null;
  icon?: React.ReactNode;
  image: string;
}

function CareerGridItem({ link, image, icon }: CareerGridItemProps) {
  return (
    <div className="relative">
      {link && (
        <a
          href={link?.href}
          target={link?.external ? "_blank" : ""}
          className="absolute w-full h-full rounded-lg opacity-0 hover:opacity-100 hover:bg-[rgba(0,0,0,0.5)] hover:cursor-pointer flex items-center justify-center"
        >
          {icon ?? <IconExternalLink className="text-white" />}
        </a>
      )}
      <img
        src={image}
        alt="jks official website screen shot"
        width={500}
        height={500}
        className="rounded-lg object-cover h-20 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
      />
    </div>
  );
}

export default CareerGridItem;
