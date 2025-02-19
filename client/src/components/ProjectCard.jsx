import React from "react";

const ProjectCard = ({ imgUrl, title, tags, link }) => {
  return (
    <div className="h-full bg-white rounded-xl overflow-hidden shadow-md mx-2">
      <img
        src={imgUrl}
        alt="title"
        className="w-full h-72 md:h-80 object-cover"
      />

      <div className="px-4 py-5">
        <a
          href={link}
          target="_blank"
          className="text-base font-semibold line-clamp-2 overflow-hidden text-ellipsis hover:text-primary cursor-pointer  hover:transition-transform hover:scale-105 hover:ease-in-out hover:duration-300 "
        >
          {title}
        </a>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => {
            return (
              <span
                key={index}
                className="text-xs text-secondary bg-orange-100 px-3 py-1 rounded "
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
