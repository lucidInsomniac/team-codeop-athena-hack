import React, {useState} from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import './Timer.css'

const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Great Job!</div>;
    }
  
    return (
      <div className="timer-inner">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };

const Timer = () => {

    const [isPlaying, setIsPlaying] = useState(true);
    
    return (
        <div className="timer">
            <div className="timer-wrapper">
                <CountdownCircleTimer
                    isPlaying={isPlaying}
                    duration={60}
                    colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                    onComplete={() => [true, 1000]}
                >
                    {renderTime}
                </CountdownCircleTimer>
            </div>


            <div className="button-wrapper">
                <button className="btn-timer" onClick={() => setIsPlaying((prev) => !prev)}>
                    Pause/Start
                </button>
            </div>
        </div>
    );
}

export default Timer;
