import { useRef } from "react";
import { useTheme } from "./context/ThemeProvider";
import About from "./pages/About";
import Certificates from "./pages/Certificates";
import ContactUs from "./pages/ContactUs";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import background from "./assets/images/backgorund.webp";
import CommonNav from "./components/CommonNav";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const App = () => {
  const { themeValue, theme } = useTheme();

  const dropDownRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const certificatesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <section
      className={` ${themeValue}  bg-cover bg-center bg-fixed bg-blend-overlay`}
      style={
        theme == "light"
          ? {
              backgroundImage: `url(${background})`,
            }
          : {}
      }
    >
      <Hero
        dropDownRef={dropDownRef}
        navBarRef={[
          heroRef,
          aboutRef,
          skillsRef,
          projectsRef,
          certificatesRef,
          contactRef,
        ]}
      />
      <About dropDownRef={dropDownRef} aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef} />
      <Projects projectsRef={projectsRef} />
      <Certificates certificatesRef={certificatesRef} />
      <ContactUs contactRef={contactRef} />
      <CommonNav
        navBarRef={[
          heroRef,
          aboutRef,
          skillsRef,
          projectsRef,
          certificatesRef,
          contactRef,
        ]}
      />
    </section>
  );
};

export default App;
