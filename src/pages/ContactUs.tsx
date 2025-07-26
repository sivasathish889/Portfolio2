import { useTheme } from "../context/ThemeProvider";
import Spline from "@splinetool/react-spline";
const ContactUs = ({ contactRef }: any) => {
  const { theme } = useTheme();
  return (
    <div
      className={`h-[100vh] w-full flex flex-col gap-3 px-2 lg:px-4 backdrop-blur-xl ${
        theme == "light" ? "text-black" : "text-white"
      }`}
      ref={contactRef}
    >
      <div className="header text-center max-w-screen relative mt-10">
        <p className="text-6xl text-purple-500">Contact Us</p>
        <p
          className={`font-bold tracking-widest w-full text-7xl md:text-9xl text-transparent absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  ${
            theme !== "light" ? "font-dark-outline-2" : "font-light-outline-2"
          }`}
        >
          CONTACT US
        </p>
      </div>
      <div className="h-[90vh] flex justify-around items-center flex-col lg:flex-row m-4  lg:px-1">
        <div className="left-content w-full lg:w-[50%] h-[40%] lg:h-[60%] flex-col gap-5 flex justify-center items-center">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input-field border-2 border-purple-500 rounded-md ps-2 w-full h-10"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-field border-2 border-purple-500 rounded-md ps-2 w-full h-10"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="input-field border-2 border-purple-500 rounded-md ps-2 w-full h-30"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-purple-500 text-white font-bold rounded-md px-4 py-2"
          >
            Send
          </button>
        </div>

        <div className="right-container lg:w-[40%] lg:h-full w-full flex justify-center items-center">
          <Spline
            scene="https://prod.spline.design/6C-3MoVAUVWvLx8k/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
