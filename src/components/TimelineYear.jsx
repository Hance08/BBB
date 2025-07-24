import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import TimelineEvent from "./TimelineEvent";

const TimelineYear = ({ yearData, isExpanded, onToggle, index }) => {
  return (
    <motion.div
      className="timeline-year"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 3.5 + index * 0.2 }}
    >
      {/* 年度標題 */}
      <motion.div
        className="year-header"
        onClick={onToggle}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="year-info">
          <h3 className="year-number">{yearData.year}</h3>
          {yearData.title && (
            <span className="year-subtitle">{yearData.title}</span>
          )}
        </div>
        <motion.div
          className="expand-icon"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.div>
      </motion.div>

      {/* 年度事件列表 */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="events-container"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="timeline-line"></div>
            {yearData.events.map((event, eventIndex) => (
              <TimelineEvent
                key={`${event.date}-${eventIndex}`}
                event={event}
                index={eventIndex}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TimelineYear;
