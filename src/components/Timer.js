import React, { useState, useEffect } from "react";
import ProgressBar from "./Progress";

function Timer() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(oldValue => {
        const newValue = oldValue + 1;

        if (newValue === 100) {
          clearInterval(interval);
        }

        return newValue;
      });
    }, 1000);
  }, []);
  
  return (
    <div>
      <ProgressBar
        color={"#007bff"}
        width={"150px"}
        value={value}
        max={100}
      />
    </div>
  );
}

export default Timer;
