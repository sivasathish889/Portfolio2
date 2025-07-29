import myImage2 from "../assets/images/myImage2.webp";
import CountUp from "../components/CountUp.tsx";
import { useTheme } from "../context/ThemeProvider.tsx";

const About = ({ dropDownRef, aboutRef }: any) => {
  const { theme } = useTheme();
  return (
    <div
      className="h-screen flex flex-col gap-3  m-2 lg:px-4 backdrop-blur-xl"
      ref={aboutRef}
    >
      <div
        className="header text-center w-full max-w-screen relative mt-10"
        ref={dropDownRef}
      >
        <p className="text-5xl md:text-7xl text-purple-500">About</p>
        <p
          className={`font-bold tracking-widest text-6xl md:text-8xl w-full  text-transparent absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${
            theme !== "light" ? "font-dark-outline-2" : "font-light-outline-2"
          }`}
        >
          ABOUT US
        </p>
      </div>
      <div className="h-[90vh] flex justify-around items-center flex-col lg:flex-row m-4  lg:px-1 ">
        <div className="left-content w-full lg:w-[50%] h-[40%] lg:h-[80%]  object-contain flex justify-center items-center">
          <img
            src={myImage2}
            className="w-[70%] h-full lg:w-[50%] object-cover rounded-3xl no-scrollbar"
            alt="image2"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
            data-aos-once={true}
            data-aos-easing="ease-in-out"
          />
        </div>
        <div className="right-content w-full lg:w-[45%] space-y-3 ">
          <p className="text-lg lg:text-3xl">
            &#128075; Hello! I am Siva Sathish
          </p>
          <p className="text-sm lg:text-lg text-justify ">
            I have completed BE-Computer Science from University collage of
            Engineering, Tindivanam. I&#39;m a passionate{" "}
            <b>Full Stack Developer </b>
            with one year of professional experience and{" "}
            <b> two completed internships.</b> I have honored skills in{" "}
            <b>
              {" "}
              Python, Java, Javascript, React.js, Node.js, Express.js, Django,
              Spring Boot, Mongo DB, and SQL.{" "}
            </b>{" "}
            I specialize in building scalable web and mobile applications using
            modern technologies. My expertise spans both front-end and back-end
            development, as well as cross-platform mobile apps.
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              className={`border-2 border-purple-500 px-7 py-2 rounded-md  bg-purple-500 cursor-pointer hover:text-black  ${
                theme == "dark" ? " text-white" : ""
              }`}
              data-aos="fade-top"
              data-aos-duration="2000"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="500"
              data-aos-once={true}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
      <div className="expreience flex justify-around items-center p-2 text-lg lg:text-3xl ">
        <div className="intern flex flex-col justify-center items-center">
          <CountUp to={2} />
          <p className="lg:text-lg">Internships</p>
        </div>
        <div className="projects flex flex-col justify-center items-center">
          <div>
            <CountUp to={25} /> +
          </div>
          <p className="lg:text-lg">Projects</p>
        </div>
        <div className="expreience flex flex-col justify-center items-center">
          <CountUp to={1} />
          <p className="lg:text-lg">Years of Expreience</p>
        </div>
      </div>{" "}
    </div>
  );
};

export default About;
