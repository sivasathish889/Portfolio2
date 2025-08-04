import { Sun, Moon, Menu } from "lucide-react";
import { useTheme } from "../../context/ThemeProvider";
const NavBar = ({ navBarRef }: any) => {
  const { theme, toggleTheme } = useTheme();

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
  return (
    <section className={`m-3 flex justify-between items-center`}>
      <div
        className=" text-4xl flex items-center gap-11 "
        data-aos="fade-right"
        data-aos-delay="1000"
        data-aos-duration="1000"
      >
        <h2>Shiva</h2>
        <span className="cursor-pointer z-50">
          {theme === "light" ? (
            <Sun onClick={toggleTheme} size={25} />
          ) : (
            <Moon onClick={toggleTheme} size={25} />
          )}
        </span>
      </div>
      <div className="left-container flex gap-5 text-sm lg:visible">
        <div className="nav-links  not-lg:hidden ">
          <ul className="flex flex-col">
            {Object.entries(navBarItems).map(([key, value], index) => (
              <a
                key={key}
                data-aos="fade-left"
                data-aos-duration={index * 500 + 500}
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
    </section>
  );
};

export default NavBar;
