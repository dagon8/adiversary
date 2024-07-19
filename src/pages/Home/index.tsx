import { useEffect, useState } from "react";
import slothFace from "../../assets/sloth.webp";
import slothFaceEyes from "../../assets/sloth-eyes.png";
import { Link } from "react-router-dom";

type Props = {};

export default function index({}: Props) {
  const [title, setTitle] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  let i = 0;
  function typeWriter() {
    let txt = "Click the sloth! ";
    let speed = 300;
    if (i < txt.length) {
      setTitle(txt.slice(0, i));
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  useEffect(() => {
    typeWriter();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-20 text-center w-full h-screen bg-yellow-200">
      <h1 className="typewriter text-6xl font-bold text-blue-400">
        {title}
      </h1>
      <Link to="/login">
        <button onClick={typeWriter} className="w-80 rounded-full">
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
