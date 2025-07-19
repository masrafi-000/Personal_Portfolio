// import {useState, useEffect} from "react";

import { Link } from "react-scroll";
import StatInfoCard from "../components/StatInfoCard";
import { ABOUT_ME, MENU_LINKS, STATS } from "../utils/data";

import PROFILE_PIC from "../assets/images/profile-pic.png";
// import ICON_1 from "../assets/images/icon-1.png"
// import ICON_2 from "../assets/images/icon-2.png"
// import ICON_3 from "../assets/images/icon-3.png"
// import ICON_4 from "../assets/images/icon-4.png"

const Hero = () => {
  // const handleDownloads = () => {
  //   const blob = new Blob(['../assets/pdf/smmasrafi.pdf'], {
  //     type: "application/pdf",
  //   });
  //   const link = document.createElement("a");
  //   link.href = URL.createObjectURL(blob);
  //   link.download = `smmasrafi.pdf`;
  //   link.click();
  // };

  return (
    <section id="hero" className="container mx-auto px-8">
      <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
        <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
          <h3 className="text-xl lg:text-3xl font-medium text-black">
            {`👋 Hi, I'm S M Masrafi!`}
          </h3>
          <h1 className="w-full lg:w-[580px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-gradient-primary bg-clip-text text-transparent">
            Frontend Developer | Exploring Backend
          </h1>
          <div className="w-full lg:w-[650px] text-sm lg:text-base mt-4 flex flex-col gap-4 ">
            <p className="w-full">
              I specialize in crafting{" "}
              <span className="font-semibold">
                beautiful, high-performance web experiences
              </span>{" "}
              using modern frontend technologies like{" "}
              <span className="font-semibold">
                React.js, Tailwind CSS, and JavaScript.
              </span>
            </p>
            <p className="w-full">
              💡
              <span className="font-medium">
                Passionate about clean code, scalable architecture, and creating
                digital experiences{" "}
              </span>{" "}
              that leave an impact. Let’s build something amazing together!
            </p>
          </div>
          <div className=" flex justify-center lg:justify-start gap-4 md:gap-8 mt-6 ">
            <Link
              to={MENU_LINKS[3].to}
              offset={MENU_LINKS[3].offset}
              smooth
              spy
              className="flex justify-center items-center cursor-pointer action-btn-outline btn-scale-anim"
            >
              View My Work
            </Link>
            <a
              href="/Masrafi_Resume.pdf"
              download="Masrafi_Resume"
              // onClick={handleDownloads}
              className="flex items-center justify-center action-btn btn-scale-anim"
            >
              Download Resume
            </a>
          </div>
          <div className="flex justify-center lg:justify-start gap-4 md:gap-7 mt-6">
            {ABOUT_ME.socialLinks.map((item) => {
              return (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer group"
                >
                  <item.icon className="text-3xl text-secondary transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[-2px] group-hover:text-primary" />
                </a>
              );
            })}
          </div>
        </div>
        <div className="w-[300px] md:w-[370px] md:h-[428px] bg-orange-100/50  relative order-1 lg:order-2 object-cover ">
          <img
            src={PROFILE_PIC}
            alt="Profile Pic"
            className="profile-pic rounded-3xl"
          />
          {/* 
        <img
          src={ICON_1}
          alt="Icon 1"
          className="icon-img -left-10 bottom-20 rotate-[1.75deg]"
        />
        <img
          src={ICON_2}
          alt="Icon 2"
          className="icon-img left-5 md:left-10 -bottom-2 rotate-[2.75deg] "
        />
        <img
          src={ICON_3}
          alt="Icon 3"
          className="icon-img left-[110px] md:left-[150px] -bottom-6 rotate-[3.75deg] "
        />
        <img
          src={ICON_4}
          alt="Icon 4"
          className="icon-img left-[200px] md:left-[255px] -bottom-9 md:-bottom-10 rotate-[4.75deg] "
        /> */}
        </div>
      </div>

      <div className="flex gap-12 mt-16 md:mt-24 flex-wrap">
        {STATS.map((item) => {
          return (
            <StatInfoCard key={item.id} count={item.count} label={item.label} />
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
