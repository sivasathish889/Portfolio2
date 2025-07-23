import { skillIcons } from "../assets/assets";

const BackEndSkills = () => {
  return (
    <div className="flex justify-center items-center h-screen not-lg:flex-col not-md:flex-col gap-2 not-lg:mx-2 md:mx-4">
      <div className="left-content w-full lg:w-[50%] md:w-[50%]  h-fit hidden md:block lg:block">
        <div className="w-full h-full flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
            className="h-full w-full lg:w-[80%] object-cover rounded-xl"
          />
        </div>
      </div>
      <div className="right-content  lg:w-[50%] ">
        <div className=" flex flex-wrap not-lg:gap-2 space-y-4 not-lg:justify-center">
          {Object.entries(skillIcons.backend).map(([key, value], index) => (
            <div
              className="flex h-full w-full md:w-[50%] lg:w-[50%] rounded-xl items-center justify-start px-4 md:py-2"
              data-aos="fade-left"
              data-aos-duration={1000}
              data-aos-delay={index * 100}
              data-aos-anchor-placement="center-bottom"
            >
              <div className="px-4 py-2 w-fit h-fit">
                <img key={key} src={value.image} alt="" className="h-10 w-12" />
              </div>
              <div className="pill w-full space-y-2">
                <p>{value.name}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackEndSkills;
