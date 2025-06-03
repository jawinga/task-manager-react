import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useEffect } from 'react';
import React from 'react';

interface TimerProps {
  dueDate?: string; 
  totalDays?: number;
}

const Timer = ({dueDate, totalDays}:TimerProps) => {
  const [percentage, setPercentage] = React.useState(0);
  const [label, setLabel] = React.useState('');

  useEffect(() => {
    const updateTime = () => {
      const now   = new Date();
      const due   = new Date(dueDate ?? '');
      const diffMsRaw = due.getTime() - now.getTime();

      if (!totalDays) {
        setLabel('No totalDays');
        setPercentage(0);
        return;
      }

      const totalMs = totalDays * 24 * 60 * 60 * 1000;
      // clamp remaining ms between 0 and totalMs
      const diffMs = Math.min(Math.max(diffMsRaw, 0), totalMs);

      // Label (time left)
      if (diffMsRaw <= 0) {
        setLabel('Expired');
      } else {
        const secondsLeft = Math.floor(diffMsRaw / 1000);
        const minutesLeft = Math.floor(secondsLeft / 60);
        const hours       = Math.floor(minutesLeft / 60);
        const minutes     = minutesLeft % 60;
        const days        = Math.floor(hours / 24);
        const hoursInDay  = hours % 24;
        const seconds     = secondsLeft % 60;

        if (days < 1) {
          // Less than a day left: show hh:mm:ss
          setLabel(
            `${hoursInDay}:${minutes.toString().padStart(2, '0')}:${seconds
              .toString()
              .padStart(2, '0')}`
          );
        } else {
          // Show days, hours, minutes
          setLabel(
            `${days}d ${hoursInDay}:${minutes.toString().padStart(2, '0')}`
          );
        }
      }

      // Percent left
      const pctLeft = (diffMs / totalMs) * 100;
      setPercentage(Math.min(Math.max(pctLeft, 0), 100));
    };

    updateTime();
    // Use 1s interval if less than a day left, else 1min
    let interval: number;
    const now = new Date();
    const due = new Date(dueDate ?? '');
    const diffMsRaw = due.getTime() - now.getTime();
    if (diffMsRaw > 0 && diffMsRaw < 24 * 60 * 60 * 1000) {
      interval = setInterval(updateTime, 1000);
    } else {
      interval = setInterval(updateTime, 60000);
    }
    return () => clearInterval(interval);
  }, [dueDate, totalDays]);

  return (
    <div style={{ width: 100, height: 100 }}>
      <CircularProgressbar
        value={percentage}
        text={label}
        styles={buildStyles({
          rotation: 0.25, 
          strokeLinecap: 'round',
          textSize: '16px',
          pathTransitionDuration: 0.5,
          pathColor: '#9333EA',
          textColor: '#d9d9d9', 
          trailColor: '#E2E8F0', 
          backgroundColor: '#F3F4F6',
        })}
      />
    </div>
  );
};

export default Timer;