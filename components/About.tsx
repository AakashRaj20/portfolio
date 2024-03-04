import Image from "next/image";
import RotatingTechs from "./RotatingTechs";
import { Button } from "./ui/button";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex justify-center md:px-4 lg:px-20 py-16 flex-wrap lg:flex-nowrap px-3 gap-y-3">
      <div className="max-w-[300px] w-full flex justify-center items-center">
        <Image
          className="profile-blob"
          src="/images/profile_without_bg.png"
          alt="Picture of the author"
          width={250}
          height={250}
        />
      </div>
      <div className="text-white xl:px-24 flex flex-col gap-5 items-center lg:items-start">
        <h2 className="text-6xl md:text-8xl">Aakash Raj</h2>
        <RotatingTechs />
        <p className="text-lg md:text-2xl text-center lg:text-start">
          I&apos;m your go-to &quot;Bob the Builder&quot; for websites! Just
          like the famous handyman, I&apos;m not limited by tech stacks. Whether
          you&apos;ve got a design in mind or need one crafted, I&apos;ll bring
          it to life, no matter the tech stack. Let&apos;s collaborate and build
          something amazing together, without constraints!
        </p>
        <div className="flex gap-4 ">
          <Link href="#contact">
            <Button className="bg-white hover:bg-gray-200 text-black px-10">
              Let&apos;s Talk
            </Button>
          </Link>
          <Link
            href={
              "https://drive.google.com/file/d/10c0ZgvSi1bZeszBGzhSe2hl_1gTPSvKD/view?usp=sharing"
            }
            target="_blank"
          >
            <Button className="bg-white  hover:bg-gray-200 text-black px-10">
              Resume
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
