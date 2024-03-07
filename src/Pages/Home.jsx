import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/CTAButton";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimeLineSection from "../components/core/HomePage/TimeLineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import Footer from "../components/common/Footer";
import ExploreMore from "../components/core/HomePage/ExploreMore";

const Home = () => {
  return (
    <div>
      {/* section 1 */}
      <div className="relative mx-auto flex flex-col w-11/12 items-center text-white justify-between max-w-maxContent">
        <Link to="/signup">
          <div className="group mt-16 p-1   mx-auto rounded-full bg-richblack-900 font-bold text-gray-200 translate-all duration-200 hover:scale-95 w-fit">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] translate-all duration-100 group-hover:bg-gray-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-4">
          Empower Your Future with
          <HighlightText text={" coding skills"} />
        </div>

        <div className="w-[90%] text-center text-lg font-bold text-richblack-300 mt-4">
          with our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>
        <div className="flex flex-row gap-7 mt-8">
          <CTAButton active={true} linkto={"/signup"}>
            Learn more
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a demo
          </CTAButton>
        </div>

        <div className="shadow-blue-200 mx-10 my-20 p-10">
          <video muted loop autoPlay src={Banner}>
            {/* <source src={Banner} type="video/mp4" /> */}
          </video>
        </div>

        {/* code section1 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                unlock your <HighlightText text={"coding potential"} /> with our
                online courses.
              </div>
            }
            subHeading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              text: "try it yourself",
              linkto: "/signup",
              active: "true",
            }}
            ctabtn2={{
              text: "Learn more",
              linkto: "/login",
              active: "false",
            }}
            codeBlock={`<!DOCTYPE html>\n<html>\n<head>\n<title>App</title>\n<linkrel='stylesheet' href="style.css" />\n</head>\n<h1>\n<a href="/">\n\tHeader\n</a>\n</h1>\n`}
            codeColor={"text-yellow-25"}
            bgGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>
        {/* code section2 */}

        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                start <HighlightText text={"coding in seconds"} />
              </div>
            }
            subHeading={
              "go ahead, give it a try. Our hands-on learning environment means you will be writing real code from your very first lesson."
            }
            ctabtn1={{
              text: "Continue",
              linkto: "/signup",
              active: "true",
            }}
            ctabtn2={{
              text: "Learn more",
              linkto: "/login",
              active: "false",
            }}
            codeBlock={`<!DOCTYPE html>\n<html>\n<head>\n<title>App</title>\n<linkrel='stylesheet' href="style.css" />\n</head>\n`}
            codeColor={"text-yellow-25"}
            bgGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>
        <ExploreMore />
      </div>

      {/* section 2 */}
      <div className="bg-pure-greys-5 text-richblack-900 ">
        <div className="homepage-bg h-[330px]">
          <div className="w-11/12 max-w-maxContent flex flex-col items-center gap-5 mx-auto ">
            <div className="h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore full catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/signup"}>
                <div>Learn more</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7 ">
          <div className="flex flex-row gap-5 mb-10 mt-[95px]">
            <div className="text-4xl font-semibold w-[45%]">
              Get the skills you need for a
              <HighlightText text={" job that is in demand"} />
            </div>
            <div className="flex flex-col gap-3 w-[40%] items-start">
              <div className="text-[16px]">
                The modern studyNotion dictates its own terms. Today, to be
                competitive specialist requires more than professional skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div>Learn more</div>
              </CTAButton>
            </div>
          </div>
          <TimeLineSection />
          <LearningLanguageSection />
        </div>
      </div>

      {/* section 3 */}
      <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 bg-black text-white">
        <InstructorSection />
        <h2 className="text-center text-4xl font-semibold mt-10">
          Review from other learners
        </h2>
        {/* review slider */}
      </div>

      {/* footer  */}
      <Footer />
    </div>
  );
};

export default Home;
