import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
const NavBar = () => {
  const [stickyNav, setStickyNav] = useState<number>(0);

  function stickNavbar() {
    let windowHeight = window.scrollY;
    setStickyNav(windowHeight);
  }

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
  }, []);
  return (
    <div className="m-3 flex justify-between text-white">
      <div
        className="logo text-4xl"
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <p>Shiva</p>
      </div>
      <div className="left-container flex gap-5 text-sm lg:visible">
        <div className="nav-links flex flex-col not-lg:hidden ">
          <a
            href="#about"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            About
          </a>
          <a
            href="#skills"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            Skills
          </a>
          <a
            href="#projects"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="700"
          >
            Projects
          </a>
          <a
            href="#certificates"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="900"
          >
            Cerificates
          </a>
          <a
            href="#contact"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="1100"
          >
            Contact Us
          </a>
        </div>
      </div>
      <div className="div lg:hidden ">
        <div className="hamburger  lg:visible">
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </div>

      {/* glass Nav */}
      {stickyNav >= window.innerHeight / 2 ? (
        <div className="fixed flex justify-center text-center transform -translate-x-1/2 -translate-y-1/2 bottom-1/2 top-1/6 left-1/2 md:text-2xl lg:visible not-lg:hidden w-full z-20 ">
          <div className=" inline-block mt-4">
            <ul className="backdrop-blur-3xl flex gap-2 text-sm rounded-full p-2 tracking-wide">
              <li className="cursor-pointer hover:bg-[#D1D5DC] hover:text-[#1D2428] rounded-3xl p-2">Home</li>
              <li className="cursor-pointer hover:bg-[#D1D5DC] hover:text-[#1D2428] rounded-3xl p-2">About</li>
              <li className="cursor-pointer hover:bg-[#D1D5DC] hover:text-[#1D2428] rounded-3xl p-2">Skills</li>
              <li className="cursor-pointer hover:bg-[#D1D5DC] hover:text-[#1D2428] rounded-3xl p-2">Certificates</li>
              <li className="cursor-pointer hover:bg-[#D1D5DC] hover:text-[#1D2428] rounded-3xl p-2">Contact Us</li>
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
