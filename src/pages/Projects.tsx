import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeProvider";

const cardData = [
  {
    id: 1,
    type: "Premium",
    number: "**** **** **** 1234",
    holder: "John Doe",
    expiry: "12/26",
    gradient: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
    accent: "from-blue-400 to-purple-500",
  },
  {
    id: 2,
    type: "Business",
    number: "**** **** **** 5678",
    holder: "Jane Smith",
    expiry: "08/27",
    gradient:
      "bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800",
    accent: "from-emerald-300 to-teal-400",
  },
  {
    id: 3,
    type: "Gold",
    number: "**** **** **** 9012",
    holder: "Mike Johnson",
    expiry: "03/28",
    gradient: "bg-gradient-to-br from-amber-500 via-yellow-600 to-orange-600",
    accent: "from-yellow-200 to-amber-300",
  },
  {
    id: 4,
    type: "Platinum",
    number: "**** **** **** 3456",
    holder: "Sarah Wilson",
    expiry: "11/25",
    gradient: "bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800",
    accent: "from-purple-300 to-pink-400",
  },
  {
    id: 5,
    type: "Black",
    number: "**** **** **** 7890",
    holder: "David Brown",
    expiry: "06/29",
    gradient: "bg-gradient-to-br from-gray-900 via-black to-gray-800",
    accent: "from-gray-400 to-white",
  },
];

export default function Projects() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen w-full py-8 ">
      <div className="max-w-full mx-auto">
        <div
          className="header text-center max-w-full relative mt-10"
          id="about"
        >
          <p className="text-6xl text-purple-500">Skills</p>
          <p
            className={`font-bold tracking-widest text-8xl md:text-9xl text-transparent absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  ${
              theme !== "light" ? "font-dark-outline-2" : "font-light-outline-2"
            }`}
          >
            SKILLS
          </p>
        </div>

        <div className="relative h-[100vh]  overflow-y-auto  no-scrollbar px-8 mb-6">
          <div className="space-y-12 ">
            {cardData.map((card, index) => {
              return (
                <div
                  key={card.id}
                  className="sticky top-36"
                  style={{
                    zIndex: cardData.length + index,
                  }}
                  ref={containerRef}
                >
                  <div
                    className={`relative w-full max-w-full mx-auto h-[60vh] lg:h-screen max-h-full rounded-2xl ${card.gradient} shadow-2xl transition-all duration-500 ease-out`}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-30"></div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
