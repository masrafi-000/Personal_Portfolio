import React from "react";

const SkillCard = ({ icon, skillName, description, progress }) => {
  return (
    <div className="bg-white rounded-2xl border border-[#fce8d4] p-4">
      <div className="flex gap-3">
        <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-[#fdeddd] to-[#ffffff] rounded-[7px]">{icon}</div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <p className="text-[13px] text-black font-medium">{skillName}</p>
            <p className="text-xs text-secondary font-medium">{progress}%</p>
          </div>

          <div className="w-full bg-background rounded-md h-[5px] relative mt-2 ">
            <div
              style={{ width: `${progress}%` }}
              className="bg-primary h-[5px] rounded-md"
            ></div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SkillCard;
