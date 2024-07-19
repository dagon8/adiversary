import { useEffect } from "react";
import LoginCard from "./LoginCard";
import { playSound } from "@/lib/utils";
import RosaSound from "../../assets/rosa-sound.mp3";

type Props = {};

export default function index({}: Props) {
  useEffect(() => {
    const audio = playSound(RosaSound);

    return () => {
      audio.pause();
      audio.currentTime = 0; // Reset the audio to the beginning
    };
  });
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-yellow-200">
      <LoginCard />
    </div>
  );
}
