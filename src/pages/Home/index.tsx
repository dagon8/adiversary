import { useEffect, useState } from "react";
import slothFace from "../../assets/sloth.webp";
import slothFaceEyes from "../../assets/sloth-eyes.png";
import { Link } from "react-router-dom";
import Typewriter from "@/components/mine/Typewriter";
import StartedSound from "../../assets/started-sound.mp3";
import { playSound } from "@/lib/utils";

type Props = {};

export default function index({}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const cursorStyle = {
    cursor: `url('https://emojicdn.elk.sh/💋?style=google'), auto`, // Example emoji URL
  };

  useEffect(() => {
    const audio = playSound(StartedSound);

    return () => {
      audio.pause();
      audio.currentTime = 0; // Reset the audio to the beginning
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-20 text-center w-full h-screen bg-yellow-200">
      <Typewriter
        text="Kiss the me to start!"
        speed={300}
        className="typewriter text-6xl font-bold text-blue-400"
      />
      <Link to="/login">
        <button style={cursorStyle} className="w-80 rounded-full">
          <img
            src={isHovered ? slothFaceEyes : slothFace}
            alt="sloth face"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </button>
      </Link>
    </div>
  );
}
