import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Timeline.css";
import timelineData from "../data/timelineData";
import TimelineYear from "./TimelineYear";

const Timeline = () => {
  const [expandedYears, setExpandedYears] = useState(
    timelineData.reduce((acc, yearData) => {
      acc[yearData.year] = true; // 預設全部展開
      return acc;
    }, {})
  );

  const toggleYear = (year) => {
    setExpandedYears((prev) => ({
      ...prev,
      [year]: !prev[year],
    }));
  };

  return (
    <motion.section
      className="timeline-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3 }}
    >
      <div className="container">
        <motion.h2
          className="timeline-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          ✨ The timeline of our love ✨
        </motion.h2>

        <div className="timeline-container">
          {timelineData.map((yearData, index) => (
            <TimelineYear
              key={yearData.year}
              yearData={yearData}
              isExpanded={expandedYears[yearData.year]}
              onToggle={() => toggleYear(yearData.year)}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Timeline;
