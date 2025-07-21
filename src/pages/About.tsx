import myImage2 from "../assets/myImage2.webp";
const About = ({dropDownRef} :any) => {
  return (
    <div className="min-h-screen flex flex-col gap-3  m-2 lg:px-4" ref={dropDownRef}>
      <p className="header text-center w-full text-5xl " id="about">
        About Me
      </p>
      <div className="h-[90vh] flex justify-around items-center flex-col lg:flex-row m-4  lg:px-1">
        <div className="left-content w-full lg:w-[50%] h-[40%] lg:h-[60%]  object-contain flex justify-center items-center">
          <img src={myImage2} className="w-[70%] h-full lg:w-[50%] object-cover rounded-3xl" alt="image2" />
        </div>
        <div className="right-content w-full lg:w-[45%] space-y-3 ">
          <p className="text-lg lg:text-2xl">&#128075; Hello! I am Siva Sathish</p>
          <p className="text-sm lg:text-lg text-justify ">
            I have completed BE-Computer Science from University collage of
            Engineering, Tindivanam. I&#39;m a passionate <b>Full Stack Developer </b>
            with one year of professional experience and <b> two completed
            internships.</b> I specialize in building scalable web and mobile
            applications using modern technologies. My expertise spans both
            front-end and back-end development, as well as cross-platform mobile
            apps.
          </p>
          <div className="flex gap-2">
            <button type="button" className="border px-7 py-2 rounded-3xl cursor-pointer text-white bg-gray-700">
              Hire Me
            </button>
            <button type="button" className="border px-7 py-2 rounded-3xl cursor-pointer text-white bg-gray-700">
              Download CV
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default About;
