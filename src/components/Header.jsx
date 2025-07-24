import React from "react";
import { motion } from "framer-motion";
import "./Header.css";

const Header = () => {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="container">
        <motion.h1
          className="title"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          💕 生日快樂 💕
        </motion.h1>
        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          我們一起走過的美好時光
        </motion.p>
      </div>

      {/* 飄散的愛心動畫 */}
      <div className="floating-hearts">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="heart"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{
              y: "-100vh",
              opacity: [0, 1, 1, 0],
              x: Math.random() * 100 - 50,
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: i * 0.5,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            💖
          </motion.div>
        ))}
      </div>
    </motion.header>
  );
};

export default Header;
