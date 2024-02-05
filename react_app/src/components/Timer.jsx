import React, { useState } from 'react';

function Timer() {
  const initTime = { heure: 10, minute: 23, second: 5 };
  const [currentTime, setCurrentTime] = useState(initTime);
  const [timer, setTimer] = useState(null);

  function incrementer() {
    return function () {
      setCurrentTime((prevTime) => {
        let time = { ...prevTime };
        time.second++;
        if (time.second > 59) {
          time.second = 0;
          time.minute++;
          if (time.minute > 59) {
            time.minute = 0;
            time.heure++;
          }
        }
        return time;
      });
    };
  }

  function decrementer() {
    return function () {
      setCurrentTime((prevTime) => {
        let time = { ...prevTime };
        time.second--;
        if (time.second < 0) {
          time.second = 59;
          time.minute--;
          if (time.minute < 0) {
            time.minute = 59;
            time.heure--;
          }
        }
        return time;
      });
    };
  }

  function stopTimer() {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
  }

  function incrementerTimer() {
    stopTimer();
    const next = incrementer(currentTime);
    const newTimer = setInterval(() => {
      next();
    }, 1000);
    setTimer(newTimer);
  }

  function decrementerTimer() {
    stopTimer();
    const previous = decrementer(currentTime);
    const newTimer = setInterval(() => {
      previous();
    }, 1000);
    setTimer(newTimer);
  }

  return (
    <div className="text-dark container mt-5">
      <h1 className="text-center text-info">Timer</h1>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card text-center">
            <div className="card-header">
              <h3>Current time</h3>
            </div>
            <div className="card-body">
              <div className="display-4">
                <span id="spHeure">{currentTime.heure}</span>:<span id="spMinute">{currentTime.minute}</span>:<span id="spSecond">{currentTime.second}</span>
              </div>
            </div>
            <div className="card-footer">
              <button className="btn btn-outline-success" onClick={incrementerTimer}>Incrementer</button>
              <button className="btn btn-outline-warning" onClick={decrementerTimer}>Decrementer</button>
              <button className="btn btn-outline-danger" onClick={stopTimer}>Arrêter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
