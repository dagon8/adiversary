import LoginCard from "./LoginCard";

type Props = {};

export default function index({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-yellow-200">
      <LoginCard />
    </div>
  );
}
