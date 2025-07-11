import NavBar from "../Components/NavBar";
import { Github, Instagram, Linkedin } from "lucide-react";
import myImage from "../assets/myImage.png";
const Hero = () => {
  return (
    <div className="h-[100vh] bg-[#1D2428]   text-gray-300 ">
      <div className="navbar flex flex-col h-[100vh] justify-between relative ">
        <NavBar />
        <img
          src={myImage}
          alt="My Image"
          className="object-contain absolute pt-16 text-center transform -translate-x-1/2 -translate-y-1/2 bottom-1/2 top-1/2 left-1/2 w-[100%] h-[100%] rounded-full z-10"
          height={200}
          width={200}
        />
        <p
          className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 bottom-1/2 top-1/3 left-1/2 md:text-[30vh] sm:text-7xl font-extralight text-5xl w-full z-0 "
          data-aos="zoom-in-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2000"
        >
          Siva Sathish
        </p>
        <div className="text-white p-3  ">
          <hr className="border border-slate-200 w-full mb-14" />
          <div className="flex justify-between items-center">
            <div className="text self-end">
              <p>Full Stack Developer</p>
            </div>
            <div className="left-container space-y-2 self-end flex gap-3">
              <Instagram />
              <Linkedin />
              <Github />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
