// import { useState } from "react";
// import FrontEndSkills from "../Components/FrontEndSkills";
// import BackEndSkills from "../Components/BackEndSkills";
// import ToolSkills from "../Components/ToolSkills";
import { skillIcons } from "../assets/assets";

// type NavItems = "frontend" | "backend" | "tools";
const Skills = () => {
  // const [currentNav, setCurrentNav] = useState<NavItems>("frontend");

  return (
    <div className="h-[100vh] flex flex-col gap-3 px-2 lg:px-4">
      <p className="header text-center w-full text-5xl " id="about">
        Skills
      </p>
      <span className="h-20 w-1 bg-gray-600 mx-auto mt-3" />
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
              <img key={key} src={value.image} alt="" className="h-14 w-24" />
              <p>{value.name}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 justify-center items-center w-[50%] lg:w-[30%] flex-wrap">
          {Object.entries(skillIcons.backend).map(([key, value]) => (
            <div className="flex flex-col border border-gray-500 px-4 py-2 w-full h-full rounded-xl items-center justify-center">
              <img key={key} src={value.image} alt="" className="h-14 w-24" />
              <p>{value.name}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center w-full text-4xl ">Tools</p>
      {/* <div className="skill-navBar flex justify-center items-center">
        <ul className="flex gap-5 backdrop-blur-2xl border rounded-full m-3">
          <li
            className={`cursor-pointer p-2 rounded-full ${
              currentNav == "frontend" ? "bg-gray-600 text-black" : ""
            }`}
            onClick={() => setCurrentNav("frontend")}
          >
            Front-End
          </li>
          <li
            className={`cursor-pointer p-2 rounded-full ${
              currentNav == "backend" ? "bg-gray-600 text-black" : ""
            }`}
            onClick={() => setCurrentNav("backend")}
          >
            Back-End
          </li>
          <li
            className={`cursor-pointer p-2 rounded-full ${
              currentNav == "tools" ? "bg-gray-600 text-black" : ""
            }`}
            onClick={() => setCurrentNav("tools")}
          >
            Tools
          </li>
        </ul>
      </div> */}
      {/* {currentNav == "frontend" && <FrontEndSkills />}
      {currentNav == "backend" && <BackEndSkills />}
      {currentNav == "tools" && <ToolSkills />} */}
      <hr />
    </div>
  );
};

export default Skills;
