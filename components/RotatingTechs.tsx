const RotatingTechs = () => {
  const techs = [
    "ReactJS",
    "NextJS",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "TailwindCSS",
    "MaterialUI",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "Mongoose",
    "PostgreSQL",
    "Git",
    "GitHub",
    "Cyclic",
    "Vercel",
    "Firebase",
    "Figma",
  ];

  return (
    <div className="flex text-white text-2xl text-center lg:text-start md:text-4xl lg:text-6xl flex-col items-center">
      <div className="h-[50px] overflow-hidden uppercase leading-[50px]">
        <span className="text-motion">
          <p className="text-color">Frontend Developer</p>
          <p className="text-color">Backend Developer</p>
          <p className="text-color">FullStack Developer</p>
          <p className="text-color">MERN Stack Developer</p>
        </span>
      </div>
    </div>
  );
};

export default RotatingTechs;
