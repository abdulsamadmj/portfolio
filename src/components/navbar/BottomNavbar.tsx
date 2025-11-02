import { FloatingDock } from "../../utils/ui/floating-dock";
import {
  IconHome,
  IconBriefcase,
  IconCode,
  IconDeviceGamepad2,
  IconMail,
} from "@tabler/icons-react";

export function Navbar() {
  const navItems = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-300" />
      ),
      link: "/",
    },
    {
      title: "Portfolio",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-300" />
      ),
      link: "/portfolio",
    },
    {
      title: "Projects",
      icon: (
        <IconCode className="h-full w-full text-neutral-300" />
      ),
      link: "/projects",
    },
    {
      title: "Gaming",
      icon: (
        <IconDeviceGamepad2 className="h-full w-full text-neutral-300" />
      ),
      link: "/gaming",
    },
    {
      title: "Connect",
      icon: (
        <IconMail className="h-full w-full text-neutral-300" />
      ),
      link: "/connect",
    },
  ];
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center pb-8">
      <FloatingDock
        items={navItems}
        desktopClassName="bg-black/90 backdrop-blur-lg border border-white/[0.2]"
        mobileClassName="bg-black/90 backdrop-blur-lg border border-white/[0.2]"
      />
    </div>
  );
}
