import { useState } from "react";
import FrontEndSkills from "./components/FrontEndSkills.tsx";
import BackEndSkills from "./components/BackEndSkills.tsx";
import ToolSkills from "./components/ToolSkills.tsx";
import { useTheme } from "../context/ThemeProvider.tsx";

// import { skillIcons } from "../assets/assets";

type NavItems = "frontend" | "backend" | "tools";
const Skills = ({ skillsRef }: any) => {
  const [currentNav, setCurrentNav] = useState<NavItems>("frontend");
  const { theme } = useTheme();

  return (
    <div
      className="h-[100vh] flex flex-col gap-3 px-2 lg:px-4  backdrop-blur-xl"
      ref={skillsRef}
    >
      <div
        className="header text-center max-w-screen relative mt-10"
        id="about"
      >
        <p className="text-6xl text-purple-500">Skills</p>
        <p
          className={`font-bold tracking-widest text-7xl md:text-9xl text-transparent absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  ${
            theme !== "light" ? "font-dark-outline-2" : "font-light-outline-2"
          }`}
        >
          SKILLS
        </p>
      </div>
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
    </div>
  );
};

export default Skills;
