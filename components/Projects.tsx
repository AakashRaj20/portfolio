import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="lg:px-24 md:px-4 px-2 flex flex-col gap-y-10" id="project">
      <h2 className="text-white text-4xl md:text-5xl text-center lg:text-start">
        Projects
      </h2>
      <div className="flex gap-4 flex-wrap justify-center md:justify-start md:flex-nowrap">
        <div className="project-card">
          <div className="w-full h-full bg-black flex flex-col gap-y-6">
            <Image
              src="/images/promptbuddy_dark.png"
              alt="PromptBuddy"
              width={500}
              height={300}
            />
            <div className="flex gap-3 px-2">
              <Link
                href="https://github.com/AakashRaj20/promptBuddy"
                target="_blank"
              >
                <Button className="text-2xl bg-white text-black hover:bg-gray-200 flex gap-x-2">
                  Github
                  <Image
                    className="bg-transparent"
                    src="/images/github.svg"
                    alt="Github"
                    width={30}
                    height={30}
                  />
                </Button>
              </Link>
              <Link href="https://promptbuddy.vercel.app" target="_blank">
                <Button className="text-2xl bg-white text-black hover:bg-gray-200">
                  Live
                </Button>
              </Link>
            </div>
            <p className="text-white text-xl px-2 pb-3">
              PromptBuddy is a Fullstack project built using NextJs and MERN
              stack. It helps user to discover and share A.I Prompts to helps
              use A.I better.
            </p>
          </div>
        </div>
        <div className="project-card">
          <div className="w-full h-full bg-black flex flex-col gap-y-6">
            <Image
              src="/images/cloudsify.png"
              alt="PromptBuddy"
              width={500}
              height={300}
            />
            <div className="flex gap-3 px-2">
              <Link
                href="https://github.com/AakashRaj20/Cloudify"
                target="_blank"
              >
                <Button className="text-2xl bg-white text-black hover:bg-gray-200 flex gap-x-2">
                  Github
                  <Image
                    className="bg-transparent"
                    src="/images/github.svg"
                    alt="Github"
                    width={30}
                    height={30}
                  />
                </Button>
              </Link>
              <Link href="https://cloudsify-59854.web.app/" target="_blank">
                <Button className="text-2xl bg-white text-black hover:bg-gray-200">
                  Live
                </Button>
              </Link>
            </div>
            <p className="text-white text-xl px-2 pb-3">
              Cloudsify, Real-time weather tracking. Diverse weather maps.
              Progressive Web App for offline access. Secure authentication.
              Simplifying weather updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
