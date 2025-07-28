import { skillIcons } from "../assets/assets";

const BackEndSkills = () => {
  return (
    <div className="flex justify-center items-center h-screen not-lg:flex-col not-md:flex-col gap-2 not-lg:mx-2 md:mx-4">
      <div className="left-content w-full lg:w-[50%] md:w-[50%]  h-fit hidden md:block lg:block">
        <div className="w-full h-full flex justify-center items-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                    className=" h-2.5 rounded-full"
                    style={{
                      width: value.knowledge,
                      backgroundColor: value.color,
                    }}
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
