import { useEffect, useState } from 'react';

import React, { useState } from 'react';
export function Timer() {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      displayExamTimeOut();
    }, 1000);
  }, [minutes, seconds]);

  let displayExamTimeOut = () => {
    let s = seconds;
    if (s == 0) {
      if (minutes == 0 && seconds == 0) {
        setSeconds(0);
        setMinutes(0);
      } else {
        let m = minutes - 1;
        setSeconds(59);
        setMinutes(m);
      }
    } else {
      s = seconds - 1;
      setSeconds(s);
    }
  };
  return (
    <div>
      <h1>
        Time left over: {minutes.toString().padStart(2, 0)}:
        {seconds.toString().padStart(2, 0)}
      </h1>
    </div>
  );
}
