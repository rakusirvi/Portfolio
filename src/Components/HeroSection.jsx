import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, speed = 200 }) => {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        const nextChar = text.charAt(index);
        setDisplayedText((prev) => prev + nextChar);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return <span>{displayedText}</span>;
};

const HeroSection = () => {
  return (
    <div
      className="flex flex-col  text-black items-start justify-center gap-4 px-6 h-screen md:px-10 lg:px-30 max-md:bg-center max-md:bg-contain max-md:bg-no-repeat
  max-md:bg-[url('/image.png')]  lg:bg-[url('/HeroBackGround.png')]  md:bg-[url('/HeroBackGround.png')] bg-cover bg-center max-md:h-screen max-md:pt-5 max-md:bg-white"
    >
      <div className="md:w-[50vw]">
        <h2 className="md:text-5xl max-md:text-4xl max-md:font-bold font-medium ">
          <TypingEffect text="Hii, I'am Rakesh" speed={150} />
        </h2>
        <h2 className="md:text-3xl max-md:text-3xl max-md:font-medium text-primary-dull">
          UI/UX & React Developer
        </h2>
        <p className="text-black/90 mt-2 max-md:font-semibold md:w-[35vw]">
          I'm always trying to bring real value and define problems with my
          designs. Welcome to my portfolio.
        </p>
        <div className="flex flex-wrap gap-3 mt-5 ">
          <button className="text-white bg-primary-dull px-5 py-3 rounded-[10px] transition-all hover:translate-y-0.5 cursor-pointer active:scale-98">
            CheckOut My Work
          </button>
          <button className="border border-primary px-11 py-3 rounded-[10px] transition-all ease-in-out text-primary-dull hover:bg-primary-dull hover:text-white cursor-pointer active:scale-98">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
