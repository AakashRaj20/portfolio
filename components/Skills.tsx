const Skills = () => {
  const frontend = [
    "ReactJS",
    "NextJS",
    "TailwindCSS",
    "MaterialUI",
    "JavaScript",
    "HTML",
    "CSS",
    "TypeScript",
    "Redux",
    "Rest API",
    "Redux-Toolkit",
  ];

  const backend = ["NodeJS", "ExpressJS", "Moongose", "Firebase", "REST API"];

  const database = [
    "MongoDB",
    "Mongoose",
    "PostgreSQL",
    "FireStore",
    "PostgreSQL",
    "SQL",
  ];

  const tools = ["Postman", "Git", "Github", "JQuery", "Linux"];
  return (
    <div
      className="px-2 md:px-4 lg:px-24 mt-20 flex flex-col gap-y-6"
      id="skill"
    >
      <h2 className="text-4xl md:text-5xl text-center lg:text-start text-white">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row m-auto md:m-0 gap-4 px-2">
        <div className="main-skills-card">
          <div className="bg-black">
            <h3 className="text-white text-3xl py-5">Frontend</h3>
            <div className="flex gap-4 flex-wrap p-4">
              {frontend.map((item, index) => {
                return (
                  <div key={index} className="skills-card">
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="main-skills-card">
          <div className="bg-black w-full h-full">
            <h3 className="text-white text-3xl py-5">Backend</h3>
            <div className="flex gap-4 flex-wrap p-4">
              {backend.map((item, index) => {
                return (
                  <div key={index} className="skills-card">
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="main-skills-card">
          <div className="bg-black w-full h-full">
            <h3 className="text-white text-3xl py-5">Database</h3>
            <div className="flex gap-4 flex-wrap p-4">
              {database.map((item, index) => {
                return (
                  <div key={index} className="skills-card">
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="main-skills-card">
          <div className="bg-black w-full h-full">
            <h3 className="text-white text-3xl py-5">Tools</h3>
            <div className="flex gap-4 flex-wrap p-4">
              {tools.map((item, index) => {
                return (
                  <div key={index} className="skills-card">
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
