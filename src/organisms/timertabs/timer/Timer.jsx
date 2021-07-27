import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { toast } from 'react-toastify';
import { IconButton } from 'src/atoms/button';
import {
  Restore as ResetIcon,
  PauseCircleOutline as PauseIcon,
  PlayCircleOutline as StartIcon,
} from '@icons';
const Timer = (props) => {
  const { msg, time, toastMsg } = props;
  const [timerRunning, setTimerRunning] = React.useState(false);
  const [timerKey, setTimerKey] = React.useState(0);

  const renderTime = ({ remainingTime }) => {
    let displayTime = 0;
    let unit = '';
    if (remainingTime > 60) {
      const secs = remainingTime % 60;
      displayTime = `${Math.floor(remainingTime / 60)}  ${
        secs ? `: ${secs}` : ''
      }`;
      unit = 'Minutes';
    } else {
      displayTime = remainingTime;
      unit = 'Seconds';
    }
    if (displayTime === 0) {
      return (
        <div className='text-3xl text-center font-semibold text-primary-300'>
          Good Job!
        </div>
      );
    }

    return (
      <div className=''>
        <div className='text-5xl text-center font-semibold'>{displayTime}</div>
        <div className='text-center'>{unit}</div>
      </div>
    );
  };
  return (
    <div className='flex flex-col items-center h-auto'>
      <div className='py-5 space-x-5'>
        <IconButton color='secondary' onClick={() => setTimerRunning(true)}>
          <StartIcon style={{ fontSize: 35 }} />
        </IconButton>
        <IconButton color='secondary' onClick={() => setTimerRunning(false)}>
          <PauseIcon style={{ fontSize: 35 }} />
        </IconButton>
        <IconButton color='secondary' onClick={() => setTimerKey(timerKey + 1)}>
          <ResetIcon style={{ fontSize: 35 }} />
        </IconButton>
      </div>
      <div className='my-5'>
        <CountdownCircleTimer
          key={timerKey}
          isPlaying={timerRunning}
          duration={time}
          strokeWidth={25}
          size={250}
          colors={[['#8B5CF6', 0.5], ['#F7B801', 0.5], ['#A30000']]}
          onComplete={() => {
            toast.dark(toastMsg, {
              position: 'bottom-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            return [false, 1000];
          }}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <p className='text-xl text-text-400'>{msg}</p>
    </div>
  );
};

export default Timer;
