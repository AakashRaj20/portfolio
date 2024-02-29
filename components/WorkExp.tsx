import Image from "next/image";

const WorkExp = () => {
  
  return (
    <div className="lg:px-24 md:px-8 px-6 mt-20 flex flex-col gap-y-6" id="exp">
      <h2 className="text-4xl md:text-5xl text-center lg:text-start text-white">Work Experience</h2>
      <ol className="relative border-s-2 border-gradient flex flex-col gap-x-3">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <Image
              className="rounded-full"
              src="/images/Tapio.png"
              alt="lenskart"
              width={50}
              height={50}
            />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
            Tapio Lae Oy
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-200">
            Freelance Frontend Developer | Nov 2023 - Feb 2024
          </time>
          <div className="mb-4 text-base font-normal text-gray-200">
            <ul className="list-disc">
              <li>
                Developed 5 responsive pages according to the new website
                design.
              </li>
              <li>Fixed multiple 45 UI bugs across different pages.</li>
              <li>
                Conducted daily code reviews, providing constructive feedback
                that significantly contributed to reducing production bugs and
                maintaining high-quality code standards across development
                teams.
              </li>
              <li>
                Collaborated with the design team to ensure the technical
                feasibility of UI/UX designs and optimized the application for
                maximum speed and scalability.
              </li>
              <li>
                Worked closely with the backend team to integrate the
                application with the REST API.
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <Image
              className="rounded-full"
              src="/images/vehicleWeight.png"
              alt="vehicle_weight"
              width={50}
              height={50}
            />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-white">
            Vehicle Weight
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-200">
            Freelance Frontend Developer | Oct 2023
          </time>
          <div className="text-base font-normal text-gray-200">
            <ul className="list-disc">
              <li>
                Streamlined code and improved responsiveness for a React and
                Electron-based desktop application.
              </li>
              <li>
                Proficiently integrated 20 diverse REST APIs for real-time data,
                enhancing application functionality.
              </li>
              <li>
                Transformed the user interface to align with dynamic API
                responses, ensuring a user-friendly experience.
              </li>
              <li>
                Fixed about 35 UI bugs on 4 pages and made the UI seamless.
              </li>
            </ul>
          </div>
        </li>
        <li className="ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <Image
              className="rounded-full"
              src="/images/lenskart.png"
              alt="lenskart"
              width={50}
              height={50}
            />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-white">
            Lenskart.com
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-200">
            Frontend Developer Intern | Feb 2023 - May 2023
          </time>
          <div className="text-base font-normal text-gray-200">
            <ul className="list-disc">
              <li>
                Revamped the Aqualens website foundation using NextJS, taking
                ownership of frontend development.
              </li>
              <li>
                Led the charge in enhancing website performance, achieving a
                remarkable 18% improvement, ultimately resulting in a noteworthy
                0.39% increase in revenue.
              </li>
              <li>
                Implemented responsive and user-friendly UI components using
                HTML, CSS, MaterialUI, ReactJS, Redux-Toolkit, NextJS and
                integrated Rest API.
              </li>
              <li>
                Contributed to the creation and maintenance of a comprehensive
                style guide and component library, streamlining development and
                ensuring a consistent user interface.
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default WorkExp;
