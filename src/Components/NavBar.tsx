import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon} from "lucide-react"
import { useTheme } from "../context/ThemeProvider";
const NavBar = () => {
  const [stickyNav, setStickyNav] = useState<number>(0);
  const {theme,toggleTheme } = useTheme();

  function stickNavbar() {
    let windowHeight = window.scrollY;
    setStickyNav(windowHeight);
  }

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
  }, []);
  return (
    <div className={`m-3 flex justify-between items-center`}>
      <div
        className="logo text-4xl flex items-center gap-11"
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <p>Shiva</p>
        {theme === "light" ? <Sun onClick={toggleTheme} className="cursor-pointer"/> : <Moon onClick={toggleTheme} className="cursor-pointer"/>}
      </div>
      <div className="left-container flex gap-5 text-sm lg:visible">
        <div className="nav-links flex flex-col not-lg:hidden ">
          <motion.a
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            href="#about"
            className="hover:transform hover:-translate-x-1 hover:-translate-y-1 transition-transform hover:underline"
          >
            About
          </motion.a>
          <motion.a
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            href="#skills"
            className="hover:transform hover:-translate-x-1 hover:-translate-y-1 transition-transform hover:underline"
          >
            Skills
          </motion.a>
          <motion.a
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            href="#projects"
            className="hover:transform hover:-translate-x-1 hover:-translate-y-1 transition-transform hover:underline"
          >
            Projects
          </motion.a>
          <motion.a
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="hover:transform hover:-translate-x-1 hover:-translate-y-1 transition-transform hover:underline"
            transition={{ duration: 1, delay: 0.7 }}
            href="#certificates"
          >
            Cerificates
          </motion.a>
          <motion.a
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="hover:transform hover:-translate-x-1 hover:-translate-y-1 transition-transform hover:underline"
            transition={{ duration: 1, delay: 0.9 }}
            href="#contact"
          >
            Contact Us
          </motion.a>
        </div>
      </div>
      {/* mobile nav bar */}
      <div className="div lg:hidden ">
        <div className="hamburger  lg:visible">
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </div>

      {/* glass Nav */}
      {stickyNav >= window.innerHeight / 2 ? (
        <div className="fixed inline-block h-8 transform -translate-x-1/2 -translate-y-1/2 bottom-1/2 top-1/12 left-1/2 md:text-2xl lg:visible not-lg:hidden  z-20 ">
          <div className="mt-4  h-6">
            <ul className="backdrop-blur-3xl border transform -translate-y-1/2 top-1/5 justify-center text-center w-full flex gap-2 text-sm rounded-full p-2 tracking-wide ">
              <li className="cursor-pointer hover:bg-[#D1D5DC] hover:text-[#1D2428] rounded-3xl p-2 transition-all duration-500 ease-in-out">
                Home
              </li>
              <li className="cursor-pointer hover:bg-[#D1D5DC] hover:text-[#1D2428] rounded-3xl p-2 transition-all duration-500 ease-in-out">
                About
              </li>
              <li className="cursor-pointer hover:bg-[#D1D5DC] hover:text-[#1D2428] rounded-3xl p-2 transition-all duration-500 ease-in-out">
                Skills
              </li>
              <li className="cursor-pointer hover:bg-[#D1D5DC] hover:text-[#1D2428] rounded-3xl p-2 transition-all duration-500 ease-in-out">
                Certificates
              </li>
              <li className="cursor-pointer hover:bg-[#D1D5DC] hover:text-[#1D2428] rounded-3xl p-2 transition-all duration-500 ease-in-out">
                Contact Us
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavBar;
