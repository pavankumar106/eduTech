import React from "react";

import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timeLineImage from "../../../assets/Images/TimelineImage.png";

const timeLine = [
  {
    logo: Logo1,
    heading: "Leadership",
    Desc: "Fully committed to the success company ",
  },
  {
    logo: Logo2,
    heading: "Leadership",
    Desc: "Fully committed to the success company ",
  },
  {
    logo: Logo3,
    heading: "Leadership",
    Desc: "Fully committed to the success company ",
  },
  {
    logo: Logo4,
    heading: "Leadership",
    Desc: "Fully committed to the success company ",
  },
];
const TimeLineSection = () => {
  return (
    <div className="">
      <div className="flex flex-row gap-10 items-center">
        <div className="w-[40%] flex flex-col gap-5">
          {timeLine.map((ele, index) => {
            return (
              <div className="flex flex-row " key={index}>
                <div className="w-[50px] h-[50px] bg-white flex items-center rounded-full p-4 m-2">
                  <img src={ele.logo} alt="logo" />
                </div>
                <div>
                  <h2 className="font-semibold text-[18px]">{ele.heading}</h2>
                  <p className="text-base">{ele.Desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="relative shadow-blue-200 shadow-[0px_0px_30px_0px]">
          <img
            src={timeLineImage}
            alt="image_timeline"
            className="shadow-white h-fit object-cover"
          />
          <div className="absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%] bg-caribbeangreen-700 flex lg:flex-row flex-col text-white uppercase py-5 gap-4 lg:gap-0 lg:py-10">
            <div className="flex gap-5 items-center lg:border-r border-caribbeangreen-300 px-7 lg:px-14">
              <h1 className="text-3xl font-bold w-[75px]">10</h1>
              <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                Years experiences
              </h1>
            </div>
            <div className="flex gap-5 items-center lg:px-14 px-7">
              <h1 className="text-3xl font-bold w-[75px]">250</h1>
              <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                types of courses
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineSection;
