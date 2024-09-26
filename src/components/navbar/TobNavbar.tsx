import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

function TobNavbar() {
  return (
    <div className="absolute top-0 text-gray-400 z-30 text-xl w-full p-5 backdrop-filter backdrop-blur-sm bg-opacity-80 bg-black flex justify-center">
      <div className="max-w-screen-lg w-full flex justify-between">
        samad.
        <div className="flex gap-1">
          <a href="https://github.com/abdulsamadmj" target="_blank">
            <IconBrandGithub className="hover:text-white" />
          </a>
          <a href="https://www.linkedin.com/in/abdul-samad-m-j-9b8ba1187/">
            <IconBrandLinkedin className="hover:text-blue-500" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TobNavbar;
