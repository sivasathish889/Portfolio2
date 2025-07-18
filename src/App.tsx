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
  
  return (
    <div className={`overflow-hidden ${themeValue} space-y-10`} style={{ fontFamily: "monospace" }}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <ContactUs />
    </div>
  );
};

export default App;
