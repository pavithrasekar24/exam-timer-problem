import { useEffect, useState } from 'react';

import React, { useState } from 'react';
export function Timer() {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    setTimeout(() => {
      displayExamTimeOut();
    }, 1000);
    console.log(minutes, seconds);
  }, [minutes, seconds]);

  let displayExamTimeOut = () => {
    let s = seconds - 1;
    if (s == 0) {
      if (minutes == 0 && seconds == 1) {
        clearInterval();
        setSeconds(0);
        setMinutes(0);
      } else {
        let m = minutes - 1;
        setSeconds(59);
        setMinutes(m);
      }
    } else {
      setSeconds(s);
    }
  };
  return (
    <div>
      <h1>
        Time left over: {minutes.toString().padStart(2, 0)}:
        {seconds.toString().padStart(2, 0)}
        <button type="button" onClick={displayExamTimeOut}>
          Click Me
        </button>
      </h1>
    </div>
  );
}
