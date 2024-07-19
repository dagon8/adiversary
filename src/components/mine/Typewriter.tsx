import { useState, useEffect } from "react";

type TypewriterProps = {
  text: string;
  speed?: number; // in milliseconds, defaults to 100;
  className?: string; // additional CSS class for the typewriter container
};

const Typewriter = ({ text, speed = 100, className = "" }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const type = () => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index += 1;
        setTimeout(type, speed);
      }
    };

    type();
  }, [text, speed]);

  return <div className={className}>{displayedText}</div>;
};

export default Typewriter;
