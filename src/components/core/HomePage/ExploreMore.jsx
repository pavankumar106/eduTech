import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import HighLightText from "./HighlightText";
import CourseCard from "./CourseCard";

const tabsName = [
  "free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMycards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div>
      <div className="text-4xl font-semibold text-center">
        Unlock the
        <HighLightText text={" Power of code"} />
      </div>
      <p className="text-center text-richblack-300 text-lg  mt-3">
        Learn to build anything you can imagine
      </p>
      {/* Tabs */}
      <div className="flex flex-row rounded-full bg-richblack-800 mt-5 mb-5 p-1 mx-2">
        {tabsName.map((element, index) => {
          return (
            <div
              className={`text-[16px] flex flex-row items-center gap-2 mx-2
               ${
                 currentTab === element
                   ? "bg-richblack-900 text-richblack-5 font-medium"
                   : "text-richblack-300"
               } rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2
            `}
              key={index}
              onClick={() => setMycards(element)}
            >
              {element}
            </div>
          );
        })}
      </div>
      <div className="lg:h-[150px]"></div>
      {/* course card */}
      <div className="lg:absolute gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-black lg:mb-0 mb-7 lg:px-0 px-3">
        {courses.map((element, index) => {
          return (
            <CourseCard
              key={index}
              cardData={element}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMore;
