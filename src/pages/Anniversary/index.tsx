import { useEffect, useState } from "react";
import Novia from "../../assets/novia.webp";
import NoviaSound from "../../assets/novia-sound.mp3";
import { playSound } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ConfettiExplosion from "react-confetti-explosion";
import OmgSound from "../../assets/omg-sound.mp3";
import GoatSound from "../../assets/the-goat-sound.mp3";
import { useNavigate } from "react-router-dom";

type Props = {};

export default function index({}: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [showDelayedComponent, setShowDelayedComponent] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDelayedComponent(true);
    }, 15000); // 20000 milliseconds = 20 seconds

    const audio = playSound(NoviaSound);
    return () => {
      clearTimeout(timer);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className="flex flex-col gap-20 w-full h-screen justify-center items-center bg-yellow-200">
      {
        <ConfettiExplosion
          force={0.8}
          duration={5000}
          particleCount={250}
          width={1600}
        />
      }
      <h1 className="font-bold text-6xl text-blue-400">
        Feliz aniversario amoooooor!
      </h1>
      {showDelayedComponent && (
        <div className="flex gap-10">
          <Button
            size={"lg"}
            onClick={() => {
              playSound(GoatSound);
              setTimeout(() => navigate("/gallery"), 1000);
            }}
          >
            Si
          </Button>
          <Button
            className="hover:bg-red-400 hover:text-white hover:cursor-not-allowed"
            variant={"destructive"}
            size={"lg"}
            onMouseEnter={() => {
              setIsHovered(true);
              playSound(OmgSound);
            }}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? "Disabled" : "No"}
          </Button>
        </div>
      )}
      <img src={Novia} />
    </div>
  );
}
