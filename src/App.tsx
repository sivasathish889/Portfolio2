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
  return (
    <div className="overflow-hidden " style={{ fontFamily: "Querencia" }}>
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
