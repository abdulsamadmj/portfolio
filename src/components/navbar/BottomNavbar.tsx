import { FloatingNav } from "../../utils/ui/floating-navbar";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      name: "Projects",
      link: "/projects",
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
