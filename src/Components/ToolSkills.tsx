import { skillIcons } from "../assets/assets";

const ToolSkills = () => {
  return (
    <div className="h-screen ">
      <div className="h-full grid grid-cols-12">
        {Object.entries(skillIcons.tools).map(([key, value]) => (
          <div className="col-span-6 md:col-span-4 lg:col-span-3  flex justify-center flex-col items-center h-full ">
            <img key={key} src={value.image} alt="" className="h-18 w-18" />
            <p>{value.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolSkills;
