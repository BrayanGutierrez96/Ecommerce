import { useEffect, useState } from "react";

function Clock() {
  const targetDate = new Date("2024-12-31T23:59:00").getTime();
  const [timeRemaining, setTimeRemaining] = useState(targetDate - Date.now());
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (!active || timeRemaining <= 0) {
      setTimeRemaining(0); 
      return;
    }

    const interval = setInterval(() => {
      const newTimeRemaining = targetDate - Date.now();
      if (newTimeRemaining <= 0) {
        setActive(false);
        setTimeRemaining(0); 
      } else {
        setTimeRemaining(newTimeRemaining);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate, active, timeRemaining]);
  const formatTime = (milisegundos) => {
    let totalSeconds = Math.floor(milisegundos / 1000);
    let segundos = totalSeconds % 60;
    let minutos = Math.floor((totalSeconds % (60 * 60)) / 60);
    let horas = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    let dias = Math.floor(totalSeconds / (60 * 60 * 24));

    return { dias, horas, minutos, segundos };
  };

  const { dias, horas, minutos, segundos } = formatTime(timeRemaining);

  return (
    <div className=" w-3/5">
      <ul className="flex gap-8">
        <li className="flex items-center gap-8 ">
          <div>
            <p className="font-medium text-sm">Days</p>
            <p className="font-bold text-3xl">{dias}</p>
          </div>
          <span className="text-2xl text-red-500 font-bold">:</span>
        </li>
        <li className="flex items-center gap-8 ">
          <div>
            <p className="font-medium text-sm">Hours</p>
            <p className="font-bold text-3xl">{horas}</p>
          </div>
          <span className="text-2xl text-red-500 font-bold">:</span>
        </li>
        <li className="flex items-center gap-8 ">
          <div>
            <p className="font-medium text-sm">Minutes</p>
            <p className="font-bold text-3xl">{minutos}</p>
          </div>
          <span className="text-2xl text-red-500 font-bold">:</span>
        </li>
        <li className="flex items-center gap-8 ">
          <div>
            <p className="font-medium text-sm">Seconds</p>
            <p className="font-bold text-3xl">{segundos}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Clock;
