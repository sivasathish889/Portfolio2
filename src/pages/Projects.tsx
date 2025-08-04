import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "../context/ThemeProvider.tsx";
import { projectImage } from "../assets/assets.tsx";

const Projects = ({ projectsRef }: any) => {
  const { theme } = useTheme();
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", `-81%`]);
  return (
    <section
      ref={targetRef}
      className="relative flex flex-col gap-3 backdrop-blur-xl"
    >
      <div
        className="header text-center w-full max-w-screen relative mt-10"
        ref={projectsRef}
      >
        <p className="text-5xl md:text-7xl text-purple-500">Projects</p>
        <p
          className={`font-bold tracking-widest text-6xl md:text-9xl text-transparent absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${
            theme !== "light" ? "font-dark-outline-2" : "font-light-outline-2"
          }`}
        >
          PROJECTS
        </p>
      </div>
      <section className="relative h-[400vh] ">
        <div className="sticky top-0 flex h-screen items-center no-scrollbar overflow-hidden w-full">
          <motion.div style={{ x }} className="flex gap-5 lg:px-4">
            {projectImage.map((card, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col h-[50vh] lg:h-[70vh] w-[50vh] lg:w-[100vh] flex-shrink-0 overflow-hidden  p-4 rounded-md backdrop-blur-3xl bg-gray-600/70"
                >
                  <div className="h-[70%] relative">
                    <img
                      src={`${card.image}`}
                      alt=""
                      className="w-[100%]  h-[100%]  hover:scale-105  transition duration-300 ease-in-out "
                    />
                  </div>

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
                        <a
                          href={card.liveLink==null ? "#" : card.liveLink}
                          className={`${
                            card.liveLink == null ? "cursor-not-allowed " : ""
                          }`}
                          target="_blank"
                        >
                          Demo
                        </a>
                      </button>
                      <button className="px-2 py-1 rounded-md text-xs border bg-purple-500 text-white">
                        <a
                          href={card.githubLink}
                          className={`${
                            card.githubLink == null ? "pointer-events-none" : ""
                          }`}
                          target="_blank"
                        >
                          Github
                        </a>
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
