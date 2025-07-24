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
    totalDays: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(startDate);
      const now = new Date();

      // 計算總天數
      const totalDays = Math.floor((now - start) / (1000 * 60 * 60 * 24));

      // 計算詳細時間
      let years = now.getFullYear() - start.getFullYear();
      let months = now.getMonth() - start.getMonth();
      let days = now.getDate() - start.getDate();
      let hours = now.getHours() - start.getHours();
      let minutes = now.getMinutes() - start.getMinutes();
      let seconds = now.getSeconds() - start.getSeconds();

      // 處理負數情況
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
        totalDays,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  const timeUnits = [
    { label: "年", value: timeData.years, icon: "💕" },
    { label: "個月", value: timeData.months, icon: "🌸" },
    { label: "天", value: timeData.days, icon: "☀️" },
    { label: "小時", value: timeData.hours, icon: "⭐" },
    { label: "分鐘", value: timeData.minutes, icon: "💫" },
    { label: "秒", value: timeData.seconds, icon: "✨" },
  ];

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
          我們在一起已經
        </motion.h2>

        <motion.div
          className="total-days"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          <span className="big-number">{timeData.totalDays}</span>
          <span className="big-label">天了 💖</span>
        </motion.div>

        <div className="time-grid">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              className="time-unit"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 2.5 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
            >
              <div className="time-icon">{unit.icon}</div>
              <div className="time-number">{unit.value}</div>
              <div className="time-label">{unit.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Counter;
