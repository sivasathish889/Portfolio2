import { useRef } from "react";
import { useTheme } from "./context/ThemeProvider";
import About from "./pages/About";
import Certificates from "./pages/Certificates";
import ContactUs from "./pages/ContactUs";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();


const App = () => {
    const {themeValue} = useTheme();
    const dropDownRef = useRef(null);
    // const heroRef = useRef(null);

  return (
    <section className={` ${themeValue} space-y-10 md:space-y-0`} style={{ fontFamily: "monospace" }}>
      <Hero dropDownRef = {dropDownRef} />
      <About dropDownRef = {dropDownRef}/>
      <Skills />
      <Projects />
      <Certificates />
      <ContactUs />
    </section>
  );
};

export default App;
