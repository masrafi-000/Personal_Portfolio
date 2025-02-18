import React, { useState } from "react";
import SkillCard from "../components/SkillCard";
import Tabs from "../components/Tabs";
import { SKILLS, SKILLS_TAB } from "../utils/data";
import {delay, motion} from "framer-motion"

const TechnicalProficiency = () => {
  const [tabData, setTabData] = useState(SKILLS);

  const [activeTab, setActiveTab] = useState("all");

  const handleTabValueChange = (value) => {
    if (value == "all") {
      setTabData(SKILLS);
      setActiveTab("all");
      return;
    }

    const updateList = SKILLS.filter((skills) => skills.type === value);
    setTabData(updateList);

    setActiveTab(value);
  };

  return (
    <section id="skills" className="bg-background mt-20">
      <div className="container mx-auto p-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title">Technical Proficiency</h4>
          <p className="text-sm text-center mt-4 leading-6">
            A versatile developer with hands-on expertise in modern
            technologies, tools and frameworks, dedicated to building efficient,
            scalable and user-centric solutions.
          </p>
        </div>

        <Tabs
          tabList={SKILLS_TAB}
          activeTab={activeTab}
          onChange={handleTabValueChange}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {tabData.map((skill, index) => {
            return (
              <motion.div  key={skill.id} 
                initial={{opacity: 0, y:20}}
                animate={{opacity: 1, y:0}}
                transition={{duration:0.4, delay: index * 0.1}}
              >
                <SkillCard
                  icon={<skill.icon className="w-6 h-6 text-primary" />}
                  skillName={skill.skill}
                  description={skill.description}
                  progress={skill.progress}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnicalProficiency;
