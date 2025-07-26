import { useEffect, useState } from "react";
import { Sun, Moon, Menu, ArrowBigUpDash } from "lucide-react";
import { useTheme } from "../context/ThemeProvider";
const NavBar = ({ navBarRef }: any) => {
  const [stickyNav, setStickyNav] = useState<number>(0);
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const navBarItems = {
    hero: {
      name: "Home",
      ref: navBarRef[0],
    },
    about: {
      name: "About",
      ref: navBarRef[1],
    },
    skills: {
      name: "Skills",
      ref: navBarRef[2],
    },
    projects: {
      name: "Projects",
      ref: navBarRef[3],
    },
    certificates: {
      name: "Certificates",
      ref: navBarRef[4],
    },
    contact: {
      name: "Contact",
      ref: navBarRef[5],
    },
  };
  function stickNavbar() {
    let windowHeight = window.scrollY;
    setStickyNav(windowHeight);
    setMenuOpen(false);
  }
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
        className=" text-4xl flex items-center gap-11"
        data-aos="fade-right"
        data-aos-delay="1000"
        data-aos-duration="1000"
      >
        <p>Shiva</p>
        {theme === "light" ? (
          <Sun onClick={toggleTheme} className="cursor-pointer z-50" />
        ) : (
          <Moon onClick={toggleTheme} className="cursor-pointer z-50" />
        )}
      </div>
      <div className="left-container flex gap-5 text-sm lg:visible">
        <div className="nav-links  not-lg:hidden ">
          <ul className="flex flex-col">
            {Object.entries(navBarItems).map(([key, value], index) => (
              <a
                key={key}
                data-aos="fade-left"
                data-aos-duration={index * 500 + 1000}
                data-aos-delay="1000"
                data-aos-anchor-placement="center-bottom"
                className="hover:transform hover:-translate-x-1 hover:text-purple-500 hover:-translate-y-1 transition-transform hover:underline cursor-pointer"
                onClick={() =>
                  value.ref.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                {value.name}
              </a>
            ))}
          </ul>
        </div>
      </div>
      {/* mobile nav bar */}
      <div className="div lg:hidden ">
        <div className="  lg:visible">
          <Menu />
        </div>
      </div>

      {/* glass Nav */}
      {stickyNav > window.innerHeight / 2 && (
        <div className="fixed inline-block h-8 transform -translate-x-1/2 -translate-y-1/2 bottom-1/2 top-1/12 left-1/2 md:text-2xl lg:visible not-lg:hidden  z-50 ">
          <div className="mt-4  h-6">
            <ul className="backdrop-blur-3xl transition-all duration-500 ease-in-out border transform -translate-y-1/2 top-1/5 justify-center text-center w-full flex gap-2 text-sm rounded-full p-2 tracking-wide ">
              {menuOpen ? (
                Object.entries(navBarItems).map(([key, value]) => (
                  <li
                    className="cursor-pointer hover:bg-[#D1D5DC] hover:text-[#1D2428] rounded-3xl p-2 transition-all duration-500 ease-in-out"
                    key={key}
                    onClick={() =>
                      value.ref.current.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                  >
                    {value.name}
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
          className="fixed bottom-0 right-10 border backdrop-blur-2xl cursor-pointer z-50"
          onClick={scrollTop}
        >
          <ArrowBigUpDash />
        </div>
      )}
    </div>
  );
};

export default NavBar;
