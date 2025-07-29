import { useRef } from "react";
import { useTheme } from "./context/ThemeProvider.tsx";
import About from "./pages/About.tsx";
import Certificates from "./pages/Certificates.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import Hero from "./pages/Hero.tsx";
import Projects from "./pages/Projects.tsx";
import Skills from "./pages/Skills.tsx";
import background from "./assets/images/backgorund.webp";
import CommonNav from "./components/CommonNav.tsx";
import AOS from "aos";
import "aos/dist/aos.css"; 
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
