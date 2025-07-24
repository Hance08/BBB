import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Counter.css";

const Counter = ({ startDate }) => {
  const [timeData, setTimeData] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(startDate);
      const now = new Date();

      let years = now.getFullYear() - start.getFullYear();
      let months = now.getMonth() - start.getMonth();
      let days = now.getDate() - start.getDate();
      let hours = now.getHours() - start.getHours();
      let minutes = now.getMinutes() - start.getMinutes();
      let seconds = now.getSeconds() - start.getSeconds();

      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }
      if (hours < 0) {
        hours += 24;
        days--;
      }
      if (days < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
      }
      if (months < 0) {
        months += 12;
        years--;
      }

      setTimeData({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <motion.section
      className="counter-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <div className="container">
        <motion.h2
          className="counter-title"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          Hance & Vivi 在一起已經
        </motion.h2>

        <motion.div
          className="continuous-time"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          <span className="time-number">{timeData.years}</span>
          <span className="time-label">年</span>
          <span className="time-number">{timeData.months}</span>
          <span className="time-label">個月</span>
          <span className="time-number">{timeData.days}</span>
          <span className="time-label">天</span>
          <span className="time-number">{timeData.hours}</span>
          <span className="time-label">小時</span>
          <span className="time-number">{timeData.minutes}</span>
          <span className="time-label">分鐘</span>
          <span className="time-number">{timeData.seconds}</span>
          <span className="time-label">秒</span>
          <span className="heart-suffix">💖</span>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Counter;
