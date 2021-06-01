import React from "react";
import Button from 'react-bootstrap/Button';

const Timer = () => {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  // Timer effect
  React.useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    else if (!timerOn) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className='timerContainer'>
      <div className='time'>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div className='button'>
        {!timerOn && time === 0 && (
          <Button onClick={() => setTimerOn(true)}>Start</Button>
        )}
        {timerOn && <Button variant="danger" onClick={() => setTimerOn(false)}>Stop</Button>}
        {!timerOn && time > 0 && (
          <Button variant="secondary" onClick={() => setTime(0)}>Reset</Button>
        )}
        {!timerOn && time > 0 && (
          <Button onClick={() => setTimerOn(true)}>Resume</Button>
        )}
      </div>
    </div>
  );
};

export default Timer;
