import React from "react";
import { motion } from "framer-motion";

const TimelineEvent = ({ event, index }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${month}/${day}`;
  };

  return (
    <motion.div
      className={`timeline-event ${event.isSpecial ? "special-event" : ""} ${
        event.isFuture ? "future-event" : ""
      }`}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* 時間節點 */}
      <div className="event-node">
        {event.isSpecial && (
          <motion.div
            className="special-ring"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
        <div className={`event-dot ${event.isSpecial ? "special-dot" : ""}`}>
          {event.isSpecial ? "💕" : "✨"}
        </div>
      </div>

      {/* 事件內容 */}
      <div className="event-content">
        <div className="event-header">
          <span className="event-date">{formatDate(event.date)}</span>
          <h4 className="event-title">{event.title}</h4>
        </div>

        <p className="event-description">{event.description}</p>

        {/* 照片預留空間 */}
        {event.hasPhoto && (
          <div className="photo-placeholder">
            <div className="photo-icon">📸</div>
            <span className="photo-text">照片位置預留</span>
          </div>
        )}

        {/* 未來事件標記 */}
        {event.isFuture && (
          <div className="future-badge">
            <span>✨ 期待中 ✨</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TimelineEvent;
