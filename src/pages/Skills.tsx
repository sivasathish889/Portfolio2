import { useState } from "react";
import FrontEndSkills from "../components/FrontEndSkills";
import BackEndSkills from "../components/BackEndSkills";
import ToolSkills from "../components/ToolSkills";
import { useTheme } from "../context/ThemeProvider";

// import { skillIcons } from "../assets/assets";

type NavItems = "frontend" | "backend" | "tools";
const Skills = ({skillsRef} : any) => {
  const [currentNav, setCurrentNav] = useState<NavItems>("frontend");
  const { theme } = useTheme();

  return (
    <div
      className="h-[100vh] flex flex-col gap-3 px-2 lg:px-4  backdrop-blur-xl"
      ref={skillsRef}
    >
      <div className="header text-center max-w-screen relative mt-10" id="about">
        <p className="text-6xl text-purple-500">Skills</p>
        <p
          className={`font-bold tracking-widest text-7xl md:text-9xl text-transparent absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  ${
            theme !== "light" ? "font-dark-outline-2" : "font-light-outline-2"
          }`}
        >
          SKILLS
        </p>
      </div>
      {/* <span className="h-20 w-1 bg-gray-600 mx-auto mt-3" />
      <span className="h-1 w-[50%] bg-gray-600 mx-auto mb-3" />
      <div className="flex gap-3">
        <span className="mx-auto flex flex-col justify-center items-center gap-3">
          <p>Front End</p>
          <span className="h-20 w-1 bg-gray-600  " />
        </span>
        <span className="mx-auto flex flex-col justify-center items-center gap-3">
          <p>Back End</p>
          <span className="h-20 w-1 bg-gray-600  " />
        </span>
      </div>
      <div className="flex gap-3 justify-around w-[100%] ">
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 justify-center items-center w-[50%] lg:w-[30%] flex-wrap">
          {Object.entries(skillIcons.frontend).map(([key, value]) => (
            <div className="flex flex-col border border-gray-500 px-4 py-2 w-full h-full rounded-xl items-center justify-center">
              <img key={key} src={value.image} alt="" className="h-14 w-14" />
              <p>{value.name}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 justify-center items-center w-[50%] lg:w-[30%] flex-wrap">
          {Object.entries(skillIcons.backend).map(([key, value]) => (
            <div className="flex flex-col border border-gray-500 px-4 py-2 w-full h-full rounded-xl items-center justify-center">
              <img key={key} src={value.image} alt="" className="h-14 w-14" />
              <p>{value.name}</p>
            </div>
          ))}
        </div>
      </div> */}
      {/* <p className="text-center w-full text-4xl ">Tools</p> */}
      <div className="skill-navBar pt-5 flex justify-center items-center ">
        <ul className="flex  justify-center items-center  gap-5 backdrop-blur-2xl border-2 border-purple-500 rounded-full m-3 transition-all duration-500 ease-in-out">
          <li
            className={`cursor-pointer px-4 py-2 rounded-full   ${
              currentNav == "frontend"
                ? theme == "light"
                  ? "bg-purple-500  text-black border-2 border-purple-500"
                  : "bg-purple-600 text-white border-2 border-purple-500"
                : ""
            }`}
            onClick={() => setCurrentNav("frontend")}
          >
            Front-End
          </li>
          <li
            className={`cursor-pointer px-4 py-2 rounded-full ${
              currentNav == "backend"
                ? theme == "light"
                  ? "bg-purple-500 text-black border-2 border-purple-500"
                  : "bg-purple-600 text-white border-2 border-purple-500"
                : ""
            }`}
            onClick={() => setCurrentNav("backend")}
          >
            Back-End
          </li>
          <li
            className={`cursor-pointer px-4 py-2 rounded-full ${
              currentNav == "tools"
                ? theme == "light"
                  ? "bg-purple-500 text-black border-2 border-purple-500"
                  : "bg-purple-600 text-white border-2 border-purple-500"
                : ""
            }`}
            onClick={() => setCurrentNav("tools")}
          >
            Tools
          </li>
        </ul>
      </div>
      {currentNav == "frontend" && <FrontEndSkills />}
      {currentNav == "backend" && <BackEndSkills />}
      {currentNav == "tools" && <ToolSkills />}
      <hr />
    </div>
  );
};

export default Skills;
