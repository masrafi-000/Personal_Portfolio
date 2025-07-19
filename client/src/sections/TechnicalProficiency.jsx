import React, { useState } from "react";
import SkillCard from "../components/SkillCard";
import Tabs from "../components/Tabs";
import { SKILLS, SKILLS_TAB } from "../utils/data";
import {delay, motion} from "framer-motion"

const TechnicalProficiency = () => {
  const [tabData, setTabData] = useState(SKILLS);

  const [activeTab, setActiveTab] = useState("all");

  const [currentPage, setCurrentPage] = useState(1);
  const skillsPerPage = 8;

  // Calculate pagination
  const totalPages = Math.ceil(tabData.length / skillsPerPage)
  const startIndex = (currentPage - 1) * skillsPerPage;
  const currentSkills = tabData.slice(startIndex, startIndex + skillsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Reset to page 1 when tab changes


  const handleTabValueChange = (value) => {
    if (value == "all") {
      setTabData(SKILLS);
      setActiveTab("all");
      return;
    } else {

      const updateList = SKILLS.filter((skills) => skills.type === value);
      setTabData(updateList);
  
      setActiveTab(value);
    }
    setCurrentPage(1);
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentSkills.map((skill, index) => {
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

        {/* Pagination Controls */}
          {
            totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <button 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-3 py-2 rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/10'}`}
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-2 rounded-lg ${
                      currentPage === page 
                        ? 'bg-primary text-white' 
                        : 'hover:bg-primary/10'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-2 rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/10'}`}
                >
                  Next
                </button>
              </div>
            )
          }

      </div>
    </section>
  );
};

export default TechnicalProficiency;
