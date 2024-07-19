import React from "react";
import VisionBoard from "./VisionBoard";
import Typewriter from "@/components/mine/Typewriter";
import FestinSound from "../../assets/festin-sound.mp3";
import { useEffect } from "react";
import { playSound } from "@/lib/utils";
type Props = {};

export default function index({}: Props) {
  useEffect(() => {
    const audio = playSound(FestinSound);

    return () => {
      audio.pause();
      audio.currentTime = 0; // Reset the audio to the beginning
    };
  }, []);
  return (
    <div className="flex flex-col justify-center items-center gap-20 w-full h-screen bg-yellow-200">
      <div>
        <Typewriter
          text="Vision board for our date later."
          speed={300}
          className="font-bold text-blue-400 text-6xl"
        />
        <Typewriter
          text="That is all, te amooooooooooo!!"
          speed={300}
          className="font-bold text-purple-400 text-6xl"
        />
      </div>
      <VisionBoard />
    </div>
  );
}
