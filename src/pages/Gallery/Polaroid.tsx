import "./index.css";

type PolaroidProps = {
    src: string,
    caption: string,
    className?: string,
};

export default function Polaroid({src, caption, className=""}: PolaroidProps) {
  console.log(className);
  return (
    <div className="item">
      <div className="polaroid">
        <img src={src} />
        <div className="caption">{caption}</div>
      </div>
    </div>
  );
}
