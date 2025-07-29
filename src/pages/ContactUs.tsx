import { useTheme } from "../context/ThemeProvider.tsx";
import contactUs from "../assets/images/contactUs.webp";
import { toast } from "react-toastify";
const ContactUs = ({ contactRef }: any) => {
  const { theme } = useTheme();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    formData.append("subject", "Contact Form Submission from Portfolio");
    const data = Object.fromEntries(formData);
    fetch("https://mailer-znjv.onrender.com/send-mail", {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        console.log("Email sent successfully");
        toast.success("Thank you for your message!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      className={`h-screen w-full flex flex-col gap-3 px-2 lg:px-4 backdrop-blur-xl ${
        theme == "light"
          ? "text-black placeholder:text-black"
          : "text-white placeholder:text-white"
      }`}
      ref={contactRef}
    >
      <div className="header text-center max-w-screen relative mt-10">
        <p className="text-4xl md:text-7xl text-purple-500">Contact Us</p>
        <p
          className={`font-bold tracking-widest w-full text-5xl md:text-9xl text-transparent absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  ${
            theme !== "light" ? "font-dark-outline-2" : "font-light-outline-2"
          }`}
        >
          CONTACT US
        </p>
      </div>
      <div
        className="h-[100vh] flex justify-around items-center flex-col lg:flex-row m-4  lg:px-1"
        onSubmit={handleSubmit}
      >
        <form
          method="POST"
          className="left-content w-full lg:w-[50%] h-[40%] lg:h-[60%] flex-col gap-5 flex justify-center items-center"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input-field border-2 border-purple-500 rounded-md ps-2 w-full h-10"
            required
          />
          <input
            type="email"
            name="from"
            placeholder="Email"
            className="input-field border-2 border-purple-500 rounded-md ps-2 w-full h-10"
            required
          />
          <textarea
            name="text"
            placeholder="Message"
            className="input-field border-2 border-purple-500 rounded-md ps-2 w-full h-30"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-purple-500 text-white font-bold rounded-md px-4 py-2 cursor-pointer"
          >
            Send
          </button>
        </form>

        <div className="right-container lg:w-[40%] lg:h-full w-[100%] h-full flex justify-center items-center">
          <img src={contactUs} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
