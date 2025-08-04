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
      <div className="header-container">
        <div className="right-side">
          <motion.h1
            className="title"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            💕 鼻鼻 生日快樂 💕
          </motion.h1>
          <motion.p
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Hance & Vivi 一起走過的美好時光
          </motion.p>
        </div>
        <div className="left-sied">
          <div className="birthday-card">
            <div className="outside">
              <div className="front">
                <p>Happy Birthday</p>
                <div className="cake">
                  <div className="top-layer"></div>
                  <div className="middle-layer"></div>
                  <div className="bottom-layer"></div>
                  <div className="candle"></div>
                </div>
              </div>
              <div className="back">
                <p>
                  今年給妳不一樣的生日驚喜，決定做一個網頁給妳，裡面記錄著我們一起走過的點點滴滴。妳想看的時候隨時都可以上來看，
                  這邊會有我們在一起的時間，還有我們的照片回憶，我從相簿裡挑了幾張照片，把它做成時間線的感覺，做著做著都笑了。
                  發覺我們在一起真的好久好久喔～也經歷了好多事情，我依舊很愛很愛妳❤️‍🔥❤️‍🔥❤️‍🔥
                </p>
              </div>
            </div>
            <div className="inside">
              <p>
                今年有寫卡片喔～用了這種方式呈現，希望妳會喜歡，嘻嘻～在做這個網站的時候，也看了很多我們以前很多的照片，
                真的覺得時間過得好快，一轉眼就要出社會了，我們從高中一直到現在大學，雖然中間有酸甜苦辣，但我們依舊很相愛，
                希望我們以後出社會後也能夠像現在這樣，一起努力，一起成長，一起結婚，一起生小孩，一起變老，一起走過人生的每一個階段。-----------
                By Hance
              </p>
            </div>
          </div>
        </div>
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
