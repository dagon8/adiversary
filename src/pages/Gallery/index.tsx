import { useEffect } from "react";
import FromTheStartSound from "../../assets/from-the-start.mp3";
import { playSound } from "@/lib/utils";
import Polaroid from "./Polaroid";
import us1 from "../../assets/us-1.jpg";
import us2 from "../../assets/us-2.jpg";
import us3 from "../../assets/us-3.jpg";
import us4 from "../../assets/us-4.jpg";
import us6 from "../../assets/us-6.png";
import us11 from "../../assets/us-11.jpg";
import us10 from "../../assets/us-10.jpg";
import us15 from "../../assets/us15.jpg";
import us7 from "../../assets/us-7.jpg";
import us8 from "../../assets/us-8.jpg";
import us9 from "../../assets/us-9.jpg";
import us16 from "../../assets/us-16.jpg";
import us14 from "../../assets/us-14.jpg";
import us13 from "../../assets/us-13.png";
import KissCat from "../../assets/kiss-cat.gif";
import { Link } from "react-router-dom";

type Props = {};

const images = [
  { src: us1, caption: "you make the small things feel big" },
  { src: us2, caption: "with you, i can let the goofyness come and go" },
  { src: us11, caption: "and you'll even join me sometimes 😆" },
  { src: us6, caption: "we love eating together" },
  { src: us10, caption: "even if its not the most gourmet dish" },
  { src: us13, caption: "even if its kinda weird" },
  { src: us15, caption: "you are there to do try it with me 🍦" },
  { src: us7, caption: "if food was a sign of love" },
  { src: us8, caption: "there wouldn't be a table big enough for us" },
  { src: us3, caption: "we visit museums of all kinds" },
  { src: us4, caption: "even those in other countries 🇲🇽" },
  { src: us9, caption: "and yet, you're the only piece i yearn for" },
  { src: us16, caption: "because despite distance and time" },
  { src: us14, caption: "you were there, always there, my missing piece 💜" },
];

export default function index({}: Props) {
  useEffect(() => {
    const audio = playSound(FromTheStartSound);

    return () => {
      audio.pause();
      audio.currentTime = 0; // Reset the audio to the beginning
    };
  }, []);
  return (
    <div className="wrapper bg-yellow-200">
      {images.map((image, index) => (
        <Polaroid key={index} src={image.src} caption={image.caption} />
      ))}

      <Link to={"/anniversary"}>
        <Polaroid
          src={KissCat}
          caption={"Click here to move on to the next part! 🥰"}
        />
      </Link>
    </div>
  );
}
