import NavBar from "../Components/NavBar";
import instagramIcon from "../assets/AnimatedIcon/instagram.gif";
import linkedIcon from "../assets/AnimatedIcon/linkedin.gif";
import githubIcon from "../assets/AnimatedIcon/github.gif";
import myImage from "../assets/myImage.png";
const Hero = () => {
  const text = "Full Stack Developer".split("");
  return (
    <div className="h-[100vh] bg-[#1D2428]   text-gray-300 not-lg:p-3">
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
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
        >
          Siva Sathish
        </p>
        <div className="text-white p-3  ">
          <hr className="border border-slate-200 w-full mb-14" />
          <div className="flex justify-between items-center">
            <div className="text self-end flex not-sm:text-xs">
              {text.map((char, i) => (
                <span
                  key={i}
                  data-aos="fade-in"
                  data-aos-delay={i * 100}
                  data-aos-duration="1000"
                  data-aos-anchor-placement="center-bottom"
                >
                  {char + "-"}
                </span>
              ))}
            </div>
            <div className="left-container self-end flex gap-3">
              <img src={githubIcon} alt="github icon" height={30} width={30} />
              <img src={linkedIcon} alt="linked icon" height={30} width={30} />
              <img
                src={instagramIcon}
                alt="instagram icon"
                height={30}
                width={30}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
