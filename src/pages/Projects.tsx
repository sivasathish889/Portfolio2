"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import background from "../assets/images/backgorund.jpg";
import { useTheme } from "../context/ThemeProvider";
import { projectImage } from "../assets/assets";
import { Github } from "lucide-react";
// Mock theme provider for this example

const Projects = () => {
  const { theme } = useTheme();
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", `-75%`]);
  return (
    <section
      className="relative flex flex-col gap-3   backdrop-blur-3xl"
      style={
        theme == "light"
          ? {
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
              backgroundBlendMode: "overlay",
            }
          : {}
      }
    >
      <div className="header text-center max-w-full relative mt-10" id="about">
        <p className="text-6xl text-purple-500">Projects</p>
        <p
          className={`font-bold tracking-widest text-8xl md:text-9xl text-transparent absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${
            theme !== "light" ? "font-dark-outline-2" : "font-light-outline-2"
          }`}
        >
          PROJECTS
        </p>
      </div>
      <section ref={targetRef} className="relative h-[400vh] ">
        <div className="sticky top-0 flex h-screen items-center no-scrollbar overflow-hidden w-full">
          <div className="absolute z-10 flex justify-between w-full">
            <div className="w-[20vh] h-[100vh] backdrop-blur-xs"></div>
            <div className="w-[20vh] h-[100vh] backdrop-blur-xs"></div>
          </div>
          <motion.div style={{ x }} className="flex gap-5 lg:px-4">
            {projectImage.map((card, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col h-[70vh] w-[100vh] flex-shrink-0 overflow-hidden  p-4 rounded-md backdrop-blur-3xl bg-gray-600/70"
                >
                  <div className="h-[70%] relative">
                    <img
                      src={`${card.image}`}
                      alt=""
                      className="w-[100%]  h-[100%]  hover:scale-110  transition duration-300 ease-in-out "
                    />
                  </div>
                  {/* <div className="absolute inset-0 bg-black h-[70%] opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-center justify-center gap-4 text-white">
                    <button>
                      <a
                        href={card.title}
                        target="_blank"
                      >
                        <div className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </button>
                    <button>
                      <a
                        href={card.title}
                        target="_blank"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </button>
                  </div> */}
                  <div className="content space-y-2 m-2 w-full h-full text-white">
                    <h3 className="text-2xl lg:text-xl">{card.title}</h3>
                    <h2 className="text-xs">{card.description}</h2>
                    <div className="flex gap-2">
                      {card.technologies.map((tech, index) => {
                        return (
                          <div key={index}>
                            <p className="border px-2 py-1 rounded-full text-xs">
                              {tech}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex gap-5">
                      <button className="px-2 py-1 rounded-md text-xs border bg-purple-500 text-white">
                        Demo
                      </button>
                      <button className="px-2 py-1 rounded-md text-xs border bg-purple-500 text-white">
                        Github
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default Projects;
