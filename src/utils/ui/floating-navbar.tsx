/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../cn";
import { Link, useLocation } from "react-router-dom";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    // icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  // set visibility of floating nav true after 1 second  rendering page
  React.useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 500);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 100,
        }}
        animate={{
          y: visible ? 0 : 100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed bottom-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-4 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            to={navItem.link}
            className={cn(
              "relative text-neutral-50 items-center flex space-x-1 hover:text-blue-500",
              navItem.link === pathname ? "text-blue-500" : ""
            )}
          >
            <span className="block sm:hidden"></span>
            <span className="block text-sm">{navItem.name}</span>
          </Link>
        ))}
        <Link
          to={"/connect"}
          className={cn(
            "border text-sm font-medium relative border-white/[0.2] text-white px-4 py-2 rounded-full hover:bg-blue-500",
            pathname === "/connect" ? "bg-blue-500" : ""
          )}
        >
          <span>Connect</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
