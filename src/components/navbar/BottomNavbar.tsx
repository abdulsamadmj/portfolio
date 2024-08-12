import { FloatingNav } from "../../utils/ui/floating-navbar";
import { IconBrandReact, IconHome, IconTie } from "@tabler/icons-react";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "Portfolio",
      link: "/portfolio",
      icon: <IconTie className="h-5 w-5 text-white" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <IconBrandReact className="h-5 w-5 text-white" />,
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
