import React from "react";
import PROFILE_PIC from "../assets/images/profile-pic.png";
import { ABOUT_ME } from "../utils/data";

const AboutMe = () => {
  return (
    <section id="about" className="container mx-auto  px-8 py-16">
      <h4 className="block lg:hidden w-[200px] section-title mb-16">
        About Me
      </h4>

      <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">
        <div className="w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-orange-100/50 rounded-3xl mx-auto ">
          <img
            src={PROFILE_PIC}
            alt="Profile Picture"
            className="profile-pic rounded-3xl"
          />
        </div>

        <div className="flex-1">
          <h4 className="hidden lg:block w-[200px] section-title text-left">
            About ME
          </h4>

          <div className="text-sm text-justify leading-6 whitespace-pre-line mt-4">
            <p className="mb-4">
              Hi there! I'm{" "}
              <span className="font-semibold text-base">S M Masrafi</span> , a
              passionate{" "}
              <span className="font-semibold text-base">
                Frontend Developer{" "}
              </span>{" "}
              with a keen eye for crafting interactive and user-friendly web
              applications. I specialize in{" "}
              <span className="font-semibold">
                {" "}
                React.js, JavaScript, Tailwind CSS,
              </span>
              creating interactive, user-friendly, and visually appealing web
              applications. My goal is to deliver seamless digital experiences
              that engage users and drive results.
            </p>
            <p className="mb-4">
              Currently, I'm exploring{" "}
              <span className="font-medium text-base">backend development</span>{" "}
              , learning{" "}
              <span className="text-base font-medium">
                Node.js, Express.js, MongoDB, and MySQL{" "}
              </span>{" "}
              to expand my skills and transition into full-stack development. I
              enjoy solving problems, optimizing performance, and bringing
              creative ideas to life through clean and efficient code.
            </p>
            <p>
              Beyond coding, I love staying updated with the latest web
              technologies, experimenting with UI/UX design, and contributing to
              open-source projects. My goal is to{" "}
              <span className="text-base font-medium">
                build scalable and high-performance web applications{" "}
              </span>{" "}
              that make a real impact.
            </p>
          </div>

          <div className="flex gap-4 mt-6">
            {ABOUT_ME.socialLinks.map((item) => {
              return (
                <a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  className="cursor-pointer group"
                >
                  <item.icon className="text-3xl text-secondary transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[-2px] group-hover:text-primary" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
