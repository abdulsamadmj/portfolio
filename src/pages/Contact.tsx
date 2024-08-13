import { IconExternalLink } from "@tabler/icons-react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div
      className="pt-16 pb-28 flex flex-col justify-center items-center text-neutral-400"
      style={{
        backdropFilter: "blur(0px)", // added to eliminate text cache of project grid showing in background
      }}
    >
      <div className="max-w-screen-md w-full p-5">
        <h6 className="text-xl text-white pb-2 font-semibold">say hello 👋🏻!</h6>
        <p className="text-lg font-normal">
          Whether it's a project discussion or just a friendly chat, feel free
          to <b className="text-neutral-300">reach out</b>. Let's connect and
          explore both <b className="text-neutral-300">professional</b> and
          <b className="text-neutral-300"> personal</b> interests together!
        </p>
        <br />
        <p className="text-lg font-normal">
          Write me anything at <br />
          <Link to={"mailto:samadmj4@gmail.com"}>
            <b className="text-neutral-300">samadmj4@gmail.com</b>
          </Link>
        </p>
        <br />
        <p className="text-lg font-normal">
          <div className="mb-2">Although I am more active on</div>
          <Link
            className="bg-green-500 p-2 px-4 rounded-sm flex items-center gap-1 w-fit"
            to={"https://wa.me/+917012559910"}
            target="_blank"
          >
            <b className="text-white">WhatsApp</b>
            <IconExternalLink className="text-white" />
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Contact;
