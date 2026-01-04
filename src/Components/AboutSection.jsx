import React from "react";
import rakesh from "../assets/rakesh.png";
const AboutSection = () => {
  return (
    <div
      id="About"
      className="text-black pt-30 w-full bg-white py-8 pt-16 px-6 my-[-1px] md:px-10 lg:px-30 "
    >
      <h1 className="text-2xl font-medium mb-5">About Me</h1>
      <div className="flex md:flex-row items-center max-md:justify-center max-md:flex-col justify-between md:p-12">
        <div>
          <img
            src={rakesh}
            className="w-[260px] h-auto rounded-2xl"
            alt="profile"
          />
        </div>
        <div className="w-[70%] max-md:w-[90%] px-5 ">
          <h1 className="text-primary font-bold  text-xl mb-3 max-md:mt-10">
            Rakesh Choudhary
          </h1>

          <p className="text-sm mb-1 ">
            <b>Hi, I’m Rakesh </b>— currently pursuing my B.Sc. in Information
            Technology (<i>Second Year</i>) at{" "}
            <i>
              {" "}
              SIES College of Arts, Science and Commerce, Nerul, Navi Mumbai.
            </i>
          </p>
          <p className="text-sm mb-1">
            I’m passionate about exploring the world of technology, with strong
            interests in{" "}
            <b>IoT, Web Development, App Development, and Designing.</b> I enjoy
            building creative solutions and experimenting with new ideas that
            combine functionality with design.
          </p>
          <p className="text-sm mb-1 ">
            My goal is to grow as a versatile developer and contribute to
            impactful projects that make everyday life smarter and easier.
          </p>

          <div className="flex gap-2 m-5 ">
            <button className="text-primary-dull border-1  text-center  px-4 py-2 rounded-[10px] transition-all  hover:bg-primary-dull hover:text-white cursor-pointer active:scale-97">
              Download Resume
            </button>
            <a
              href="#TT"
              className="text-white bg-primary-dull max-md:px-8 text-center px-5 py-2 rounded-[10px] transition-all hover:translate-y-0.5 cursor-pointer active:scale-98"
            >
              Know Skill's
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
