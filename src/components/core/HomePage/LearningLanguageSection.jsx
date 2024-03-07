import React from "react";
import HighlightText from "./HighlightText";
import knowYourProgress from "../../../assets/Images/Know_your_progress.png";
import compare from "../../../assets/Images/Compare_with_others.png";
import plan from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "./CTAButton";

const LearningLanguageSection = () => {
  return (
    <div className="mt-[150px] mb-[50px]">
      <div className="flex flex-col gap-5 ">
        <div className="text-4xl font-semibold text-center">
          Your swiss knife for
          <HighlightText text={" learning any language"} />
        </div>
        <div className="text-center text-richblack-600 mx-auto text-base font-medium w-[80%]">
          Using spin making learning multiple languages easy. With 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </div>

        <div className="flex flex-row items-center justify-center mt-5 gap-0">
          <img
            src={knowYourProgress}
            alt="image_knowYourProgress"
            className="object-contain -mr-32"
          />
          <img className="object-contain" src={compare} alt="image_compare" />
          <img className="object-contain -ml-36" src={plan} alt="image_plan" />
        </div>
        <div className="w-fit mx-auto mb-3">
          <CTAButton active={true} linkto={"/signup"}>
            Learn more
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
