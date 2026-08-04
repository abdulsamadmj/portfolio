import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { GITHUB_URL, LINKEDIN_URL, TINKERHUB_URL } from "../../utils/Constants";

function TobNavbar() {
  return (
    <div className="fixed top-0 text-gray-400 z-30 text-xl w-full p-5 backdrop-filter backdrop-blur-sm bg-opacity-80 bg-black flex justify-center">
      <div className="max-w-screen-lg w-full flex justify-between">
        samad.
        <div className="flex gap-2 items-center">
          {/* TinkerHub */}
          <a href={TINKERHUB_URL} target="_blank">
            <img src={"/th.png"} alt="TinkerHub" className="w-5 h-5 hover:opacity-85" />
          </a>
          {/* GitHub */}
          <a href={GITHUB_URL} target="_blank">
            <IconBrandGithub className="hover:text-white" />
          </a>
          {/* LinkedIn */}
          <a href={LINKEDIN_URL} target="_blank">
            <IconBrandLinkedin className="hover:text-blue-500" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TobNavbar;
