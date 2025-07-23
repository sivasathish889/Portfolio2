import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Menu, ArrowBigUpDash } from "lucide-react";
import { useTheme } from "../context/ThemeProvider";
const NavBar = () => {
  const [stickyNav, setStickyNav] = useState<number>(0);
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  function stickNavbar() {
    let windowHeight = window.scrollY;
    setStickyNav(windowHeight);
    setMenuOpen(false);
  }

  // Scroll to the top of the page with a smooth animation.
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
  }, []);
  return (
    <div className={`m-3 flex justify-between items-center`}>
      <div
        className="logo text-4xl flex items-center gap-11"
        data-aos="fade-right"
        data-aos-delay="1000"
        data-aos-duration="1000"
      >
        <p>Shiva</p>
        {theme === "light" ? (
          <Sun onClick={toggleTheme} className="cursor-pointer" />
        ) : (
          <Moon onClick={toggleTheme} className="cursor-pointer" />
        )}
      </div>
      <div className="left-container flex gap-5 text-sm lg:visible">
        <div className="nav-links  not-lg:hidden ">
          <ul className="flex flex-col">
            {Object.entries([
              "About",
              "Skills",
              "Projects",
              "Certificates",
              "Contact",
            ]).map(([key, value],index) => (
              <a
                key={key}
                data-aos="fade-left"
                data-aos-duration={index * 500 + 1000}
                data-aos-delay="1000"
                data-aos-anchor-placement="center-bottom"
                className="hover:transform hover:-translate-x-1 hover:text-purple-500 hover:-translate-y-1 transition-transform hover:underline cursor-pointer"
              >
                {value}
              </a>
            ))}
          </ul>

          {/*<motion.a
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="hover:transform hover:-translate-x-1 hover:-translate-y-1 transition-transform hover:underline"
            transition={{ duration: 1, delay: 0.9 }}
            href="#contact"
          >
            Contact Us
          </motion.a> */}
        </div>
      </div>
      {/* mobile nav bar */}
      <div className="div lg:hidden ">
        <div className="  lg:visible">
          <Menu />
        </div>
      </div>

      {/* glass Nav */}
      {stickyNav >= window.innerHeight / 2 && (
        <div className="fixed inline-block h-8 transform -translate-x-1/2 -translate-y-1/2 bottom-1/2 top-1/12 left-1/2 md:text-2xl lg:visible not-lg:hidden  z-20 ">
          <div className="mt-4  h-6">
            <ul className="backdrop-blur-3xl transition-all duration-500 ease-in-out border transform -translate-y-1/2 top-1/5 justify-center text-center w-full flex gap-2 text-sm rounded-full p-2 tracking-wide ">
              {menuOpen ? (
                Object.entries([
                  "Home",
                  "About",
                  "Skills",
                  "Projects",
                  "Certificates",
                  "Contact Us",
                ]).map(([key, value]) => (
                  <li
                    className="cursor-pointer hover:bg-[#D1D5DC] hover:text-[#1D2428] rounded-3xl p-2 transition-all duration-500 ease-in-out"
                    key={key}
                  >
                    {value}
                  </li>
                ))
              ) : (
                <>
                  <li
                    className="cursor-pointer"
                    onClick={() => setMenuOpen(true)}
                  >
                    <Menu />
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      )}

      {/* last nav */}
      {stickyNav > window.innerHeight / 2 && (
        <div
          className="fixed bottom-10 right-10 border backdrop-blur-2xl cursor-pointer"
          onClick={scrollTop}
        >
          <ArrowBigUpDash />
        </div>
      )}
    </div>
  );
};

export default NavBar;
