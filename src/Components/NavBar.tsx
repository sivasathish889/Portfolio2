
const NavBar = () => {
  return (
    <div className="m-3 flex justify-between text-white">
      
      <div className="logo text-4xl" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
        <p>Shiva</p>
      </div>
      <div className="left-container flex gap-5 text-sm">
        <div className="nav-links flex flex-col">
          <a href="#about" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">About</a>
          <a href="#skills" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">Skills</a>
          <a href="#projects" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">Projects</a>
          <a href="#certificates" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">Cerificates</a>
          <a href="#contact" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">Contact Us</a>
        </div>
        
      </div>
    </div>
  );
};

export default NavBar;
