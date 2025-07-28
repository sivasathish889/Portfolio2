import {
  ArrowBigUpDash,
  Brain,
  Contact,
  FolderGit2,
  Home,
  Info,
  Menu,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useState } from "react";

const CommonNav = ({ navBarRef }: any) => {
  const [stickyNav, setStickyNav] = useState<number>(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const navBarItems = {
    hero: {
      name: "Home",
      ref: navBarRef[0],
      icon: <Home size={35} />,
    },
    about: {
      name: "About",
      ref: navBarRef[1],
      icon: <Info size={35} />,
    },
    skills: {
      name: "Skills",
      ref: navBarRef[2],
      icon: <Brain size={35} />,
    },
    projects: {
      name: "Projects",
      ref: navBarRef[3],
      icon: <FolderGit2 size={35} />,
    },
    certificates: {
      name: "Certificates",
      ref: navBarRef[4],
      icon: <ShieldCheck size={35} />,
    },
    contact: {
      name: "Contact",
      ref: navBarRef[5],
      icon: <Contact size={35} />,
    },
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function stickNavbar() {
    let windowHeight = window.scrollY;
    setStickyNav(windowHeight);
    setMenuOpen(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
  }, []);
  return (
    <section>
      {stickyNav > window.innerHeight / 2 && (
        <div
          className="fixed bottom-10 right-10 border backdrop-blur-2xl cursor-pointer z-50"
          onClick={scrollTop}
        >
          <ArrowBigUpDash />
        </div>
      )}
      {/* glass Nav */}
      {stickyNav > window.innerHeight / 2 && (
        <div className="fixed inline-block h-8 transform -translate-x-1/2 -translate-y-1/12 bottom-1/2 top-1/12 left-1/2 md:text-2xl lg:visible not-lg:hidden  z-50 ">
          <div className="mt-4  h-6">
            <ul className="backdrop-blur-3xl transition-all duration-200 ease-linear px-2 border transform -translate-y-1/2 top-1/5 justify-center text-center w-full flex gap-2 text-sm rounded-full p-2 tracking-wide ">
              {menuOpen ? (
                Object.entries(navBarItems).map(([key, value]) => (
                  <li
                    className="cursor-pointer flex-col font-bold hover:bg-[#D1D5DC] px-2 py-2 transform hover:-translate-y-3   flex justify-center items-center hover:text-[#1D2428] rounded-full hover:py-4 hover:px-4 transition-all duration-500 ease-in-out"
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
    </section>
  );
};

export default CommonNav;
