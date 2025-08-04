import { useEffect, useState } from "react";
import { ArrowDownToDot } from "lucide-react";
import NavBar from "./components/NavBar.tsx";
import myImage from "../assets/images/MyImage.webp";
import { social_icons } from "../assets/assets.tsx";
import resume from "../assets/Siva_Sathish_Resume.pdf";
const Hero = ({ dropDownRef, navBarRef }: any) => {
  const [stickyNav, setStickyNav] = useState<number>(0);
  const text = "Full Stack Developer".split("");
  function stickNavbar() {
    let windowHeight = window.scrollY;
    setStickyNav(windowHeight);
  }

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
  }, []);
  return (
    <>
      <div
        className="navbar flex flex-col h-screen justify-between relative not-lg:p-3  backdrop-blur-xl overflow-hidden"
        ref={navBarRef[0]}
      >
        <NavBar navBarRef={navBarRef} />
        <img
          src={myImage}
          alt="My Image"
          className="object-contain absolute lg:pt-16 text-center transform -translate-x-1/2 -translate-y-7/12 lg:-translate-y-1/2 bottom-1/2 top-1/2 left-1/2 w-[70%] h-[100%] lg:w-[100%] lg:h-[100%] rounded-full z-10"
          height={200}
          width={200}
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1000"
        />
        <p
          className="absolute text-center transform -translate-x-1/2 -translate-y-2/6 bottom-1/2 lg:top-1/3 top-1/4 left-1/2 lg:text-[20vh] sm:text-7xl font-extralight text-4xl w-full z-0 bg-gradient-to-t  via-purple-500 from-transparent text-transparent bg-clip-text "
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="100"
        >
          Siva Sathish
        </p>
        <div className=" lg:p-3 flex flex-col ">
          <hr className="border w-full mb-14 not-lg:hidden " />
          <div className="not-md:space-y-10 not-md:mb-20 lg:flex lg:justify-between items-center">
            <div className=" self-end justify-center flex not-sm:text-xs ">
              {text.map((char, i) => (
                <span
                  key={i}
                  data-aos="fade-in"
                  data-aos-delay={i * 100}
                  data-aos-duration="1000"
                  data-aos-anchor-placement="center-bottom"
                  className="text-xs lg:text-lg font-extralight"
                >
                  {char + "\u00A0"}
                </span>
              ))}
            </div>
            <div className="left-container self-end flex justify-center not-lg:space-x-5 flex-col items-center not-lg:gap-6 gap-2">
              <div className="flex gap-x-3">
                <a
                  href="https://github.com/sivasathish889"
                  target="_blank"
                  className="cusor-pointer z-10"
                >
                  <img
                    src={social_icons.github}
                    alt="github icon"
                    className="h-12 w-12 lg:h-14 lg:w-14 cursor-pointer"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="1000"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/siva-sathish-120634301/"
                  className="cursor-pointer z-10"
                  target="_blank"
                >
                  <img
                    src={social_icons.linkedin}
                    alt="linked icon"
                    className="h-12 w-12 lg:h-14 lg:w-14 c"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="1200"
                  />
                </a>
                <a
                  href="https://www.instagram.com/black_baby_zera/"
                  className="cursor-pointer z-10"
                  target="_blank"
                >
                  <img
                    src={social_icons.instagram}
                    alt="instagram icon"
                    className="h-12 w-12 lg:h-14 lg:w-14 "
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="1500"
                  />
                </a>
              </div>
              <div className="only-mobile flex justify-center items-center gap-4">
                <button
                  className="px-4 py-2 border-2 rounded-md border-purple-500 hover:bg-purple-500 cursor-pointer hover:text-black"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay="1000"
                  onClick={() =>
                    navBarRef[5].current?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Hire Me
                </button>
                <button
                  className="px-4 py-2 border-2 rounded-md border-purple-500 hover:bg-purple-500 cursor-pointer hover:text-black "
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay="1000"
                >
                  <a href={resume} download={true}>
                    Download CV
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        {stickyNav < 150 && (
          <div
            className="absolute bottom-14 md:bottom-3 left-1/2 transform -translate-x-1/2 z-10 border p-1 rounded-md cursor-pointer"
            onClick={() =>
              dropDownRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <ArrowDownToDot />
          </div>
        )}

        {/* last nav */}
      </div>
    </>
  );
};

export default Hero;
