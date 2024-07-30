import VisionBoard from "./VisionBoard";
import Typewriter from "@/components/mine/Typewriter";
import FestinSound from "../../assets/festin-sound.mp3";
import { useEffect } from "react";
import { playSound } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function index() {
  useEffect(() => {
    const audio = playSound(FestinSound);

    return () => {
      audio.pause();
      audio.currentTime = 0; // Reset the audio to the beginning
    };
  }, []);
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-yellow-200">
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
      <div className="flex flex-col gap-4 justify-center items-center w-full h-full">
        <Link to={"/gallery"}>
          <Button>Back to Gallery 📷</Button>
        </Link>
        <VisionBoard />
      </div>
    </div>
  );
}
