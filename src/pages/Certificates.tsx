import { ScrollTimeline } from "../components/lightswind/scroll-timeline";
import { useTheme } from "../context/ThemeProvider";
import background from "../assets/images/backgorund.jpg";
const Certificates = () => {
  const { theme } = useTheme();
  const DEFAULT_EVENTS = [
    {
      year: "Nov 23 - Apr 24",
      title: "Python Full Stack Development",
      subtitle: "CSC",
      description:
        "Learn Both Frontend and Backend Development using Python and Django",
    },
    {
      year: "Nov 25 - Mar 25",
      title: "InternShip 1",
      subtitle: "XDR Technologies and Services",
      description:
        "Gained practical experience in full stack development during the internship period.",
    },
    {
      year: "Jun 25 - Dec 25",
      title: "InternShip 2",
      subtitle: "GenSet AI",
      description:
        "Learned full stack web development and AI agent learning and gained experience in GenSet AI's products and services.",
    },
  ];
  return (
    <div
      className="h-full flex flex-col gap-3  m-2 lg:px-4 backdrop-blur-3xl"
      style={
        theme == "light"
          ? {
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              backgroundBlendMode: "overlay",
            }
          : {}
      }
    >
      <div className="header  text-center max-w-screen relative mt-10" id="about">
        <p className="text-3xl md:text-7xl text-purple-500">Certificates</p>
        <p
          className={`font-bold tracking-widest  text-4xl md:text-9xl text-transparent absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  ${
            theme !== "light" ? "font-dark-outline-2" : "font-light-outline-2"
          }`}
        >
          CERTIFICATES
        </p>
      </div>
      <ScrollTimeline events={DEFAULT_EVENTS} />
      <hr />
    </div>
  );
};

export default Certificates;
