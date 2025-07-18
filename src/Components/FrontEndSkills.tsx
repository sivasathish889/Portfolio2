import { skillIcons } from "../assets/assets"

const FrontEndSkills = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className=" grid grid-cols-12 w-full place-content-evenly">
        <img src={skillIcons.html} alt="" className="h-32 w-3h-32  border m-2 p-4 col-span-3" />
        <img src={skillIcons.css} alt="" className="h-32 w-3h-32 border m-2 p-4 col-span-3"/>
        <img src={skillIcons.bootstrap} alt="" className="h-32 w-3h-32 border m-2 p-4 col-span-3"/>
        <img src={skillIcons.tailwind} alt="" className="h-32 w-3h-32 border m-2 p-4 col-span-3"/>
        <img src={skillIcons.js} alt="" className="h-32 w-3h-32 border m-2 p-4 col-span-3"/>
        <img src={skillIcons.react} alt="" className="h-32 w-3h-32 border m-2 p-4 col-span-3"/>
        <img src={skillIcons.expo} alt="" className="h-32 w-3h-32 border m-2 p-4 col-span-3"/>
        <img src={skillIcons.nextjs} alt="" className="h-32 w-3h-32 border m-2 p-4 col-span-3"/>
      </div>
    </div>
  )
}

export default FrontEndSkills