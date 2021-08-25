import React from 'react';

import './styles.scss';

type Props = {};

const TimerContainer: React.FC<Props> = () => {
  const [timerDays, setTimerDays] = React.useState<number>(0);
  const [timerHours, setTimerHours] = React.useState<number>(0);
  const [timerMinutes, setTimerMinutes] = React.useState<number>(0);
  const [timerSeconds, setTimerSeconds] = React.useState<number>(0);

  let interval: any = null;

  const startTimer = () => {
    const countdownDate = new Date('Sep 14, 2021 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  React.useEffect(() => {
    startTimer();

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='countdown-item'>
      <div className='clock-item'>{timerDays}</div>
      <div className='dot'>:</div>
      <div className='clock-item'>{timerHours}</div>
      <div className='dot'>:</div>
      <div className='clock-item'>{timerMinutes}</div>
      <div className='dot'>:</div>
      <div className='clock-item'>{timerSeconds}</div>
    </div>
  );
};

export default TimerContainer;
