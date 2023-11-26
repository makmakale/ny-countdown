import { useEffect } from 'react';
import { countDate } from '@/constants';

export const useCountdown = (dayRef, hourRef, minuteRef, secondRef) => {
  function convert(val) {
    return Math.floor(val).toString().padStart(2, '0');
  }

  function startCountdown() {
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    dayRef.current.innerText = convert(gap / day);
    hourRef.current.innerText = convert((gap % day) / hour);
    minuteRef.current.innerText = convert((gap % hour) / minute);
    secondRef.current.innerText = convert((gap % minute) / second);
  }

  useEffect(() => {
    const countdownId = setInterval(() => {
      startCountdown();
    }, 1000);

    return () => {
      clearInterval(countdownId);
    };
  }, []);
};
