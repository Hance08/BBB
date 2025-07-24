import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import TimelineEvent from "./TimelineEvent";

const TimelineYear = ({ yearData, isExpanded, onToggle, index }) => {
  return (
    <motion.div
      className="timeline-year"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="year-header" onClick={onToggle}>
        <div className="year-info">
          <h2 className="year-number">{yearData.year}</h2>
          <h3 className="year-subtitle">{yearData.subtitle}</h3>
        </div>
        <span className={`expand-icon ${isExpanded ? "expanded" : ""}`}>
          {isExpanded ? "-" : "▼"}
        </span>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="events-container"
          >
            <div className="timeline-line" />
            {yearData.events.map((event, eventIndex) => (
              <TimelineEvent key={event.id} event={event} index={eventIndex} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TimelineYear;
