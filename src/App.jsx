import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Timeline from "./components/Timeline";
import Header from "./components/Header";
import musicFile from "./assets/audio/happy-birthday.mp3";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      if (isPlaying) {
        audio
          .play()
          .catch((error) => console.error("Audio play failed:", error));
      } else {
        audio.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="App">
      <audio ref={audioRef} src={musicFile} preload="auto" />
      <button onClick={togglePlay} className="music-toggle-btn">
        {isPlaying ? "❚❚" : "▶"}
      </button>
      <Header />
      <Counter startDate="2019-09-30" />
      <Timeline />
    </div>
  );
}

export default App;
