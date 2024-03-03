'use client';
import React, { useEffect, useState } from 'react';

export default function CountdownTimer() {
  const [expiryTime, setExpiryTime] = useState<string | null>('25 apr 2024 18:00:00');
  const [countdownDays, setCountdownDays] = useState(0);
  const [countdownHours, setCountdownHours] = useState(0);
  const [countdownMinutes, setCountdownMinutes] = useState(0);
  const [countdownSeconds, setCountdownSeconds] = useState(0);

  const countdownTimer = () => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime!).getTime();
      const currentTime = new Date().getTime();
      const remainingDayTime = countdownDateTime - currentTime;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor(
        (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);
      setCountdownSeconds(totalSeconds);
      setCountdownMinutes(totalMinutes);
      setCountdownHours(totalHours);
      setCountdownDays(totalDays);

      if (remainingDayTime < 0) {
        clearInterval(timeInterval);
        setExpiryTime(null);
        setCountdownSeconds(0);
        setCountdownMinutes(0);
        setCountdownHours(0);
        setCountdownDays(0);
      }
    }, 1000);
  };

  useEffect(() => {
    if (expiryTime) {
      countdownTimer();
    }
  });
  return (
    <div className="flex items-center justify-center gap-2 text-3xl font-bold">
      <div className="flex h-[60px] w-[60px] flex-col items-center justify-center rounded-full border-[1.7px] border-[#FFB8D6] bg-black p-5 sm:h-[70px] sm:w-[70px] sm:p-10">
        <div className="flex flex-col items-center justify-center">
          <p className="text-base font-semibold sm:text-3xl">{countdownDays}</p>
          <p className="text-xs font-medium sm:text-base">Days</p>
        </div>
      </div>
      :
      <div className="flex h-[60px] w-[60px] flex-col items-center justify-center rounded-full border-[1.7px] border-[#FFB8D6] bg-black p-5 sm:h-[70px] sm:w-[70px] sm:p-10">
        <div className="flex flex-col items-center justify-center">
          <p className="text-base font-semibold sm:text-3xl">{countdownHours}</p>
          <p className="text-xs font-medium sm:text-base">Hrs</p>
        </div>
      </div>
      :
      <div className="flex h-[60px] w-[60px] flex-col items-center justify-center rounded-full border-[1.7px] border-[#FFB8D6] bg-black p-5 sm:h-[70px] sm:w-[70px] sm:p-10">
        <div className="flex flex-col items-center justify-center">
          <p className="text-base font-semibold sm:text-3xl">{countdownMinutes}</p>
          <p className="text-xs font-medium sm:text-base">Mins</p>
        </div>
      </div>
      :
      <div className="flex h-[60px] w-[60px] flex-col items-center justify-center rounded-full border-[1.7px] border-[#FFB8D6] bg-black p-5 sm:h-[70px] sm:w-[70px] sm:p-10">
        <div className="flex flex-col items-center justify-center">
          <p className="text-base font-semibold sm:text-3xl">{countdownSeconds}</p>
          <p className="text-xs font-medium sm:text-base">Secs</p>
        </div>
      </div>
    </div>
  );
}
