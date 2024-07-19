import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import DatePicker from "./DatePicker";
import { useEffect, useState } from "react";
import { useAppContext } from "@/context/Context";
import SusCat from "../../assets/sus-cat.gif";
import YipeeCat from "../../assets/happy-cat.gif";
import SusSound from "../../assets/sus-sound.mp3";
import YipeeSound from "../../assets/yipee-sound.mp3";
import ConfettiExplosion from "react-confetti-explosion";
import { useNavigate } from "react-router-dom";
import { playSound } from "@/lib/utils";

export default function LoginCard() {
  const { date, setDate, isLogged, setIsLogged } = useAppContext();
  const [errorMessage, setErrorMessage] = useState("");
  const [isExploding, setIsExploding] = useState(false);
  const [isImage, setIsImage] = useState({ show: false, src: "" });
  const navigate = useNavigate();

  const isSameDate = (date1: Date, date2: Date): boolean => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const handleSubmit = () => {
    if (isSameDate(date, new Date("2023-07-30T12:00:00"))) {
      playSound(YipeeSound);
      setIsImage({ show: true, src: YipeeCat });
      setIsExploding(true);
      setTimeout(() => {
        setIsLogged(true);
        navigate("/");
      }, 3000);
      return;
    } else {
      playSound(SusSound);
      setIsImage({ show: true, src: SusCat });
      setErrorMessage("Wow! You really don't know it... 🫠");
      setIsLogged(false);
      return;
    }
  };

  useEffect(() => {
    if (isLogged) {
      return navigate("/");
    }
  });

  return (
    <Card className="flex p-3">
      <div>
        <CardHeader>
          <div className="flex justify-center w-full">
            {isExploding && (
              <ConfettiExplosion
                force={0.8}
                duration={3000}
                particleCount={250}
                width={1600}
              />
            )}
          </div>
          <CardTitle>What date did we become a couple? 👀 </CardTitle>
          <CardDescription>Hint: it was a year ago hehe 🤭</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="dateAniversary">Date</Label>
                <DatePicker date={date} setDate={setDate} />
                <p className="text-xs text-red-300">{errorMessage}</p>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-row-reverse">
          <Button onClick={handleSubmit}>Submit</Button>
        </CardFooter>
      </div>
      {isImage.show && <img src={isImage.src} className="rounded" />}
    </Card>
  );
}
