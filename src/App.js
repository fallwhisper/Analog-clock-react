import React, { Component, useEffect, useState } from "react";
import Clock from "./components/Clock";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    
    let hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
  
    const hourHand = document.getElementById("hourHand");
    const minuteHand = document.getElementById("minuteHand");
    const secondHand = document.getElementById("secondHand");
  
    hourHand.style.transform = `rotate(${hour*30 + min*0.5 -180}deg)`
    minuteHand.style.transform = `rotate(${min*6 - 180}deg)`
    secondHand.style.transform = `rotate(${sec*6 - 180}deg)`
  
    return () => {
      clearInterval(interval);
    };
  }, [time]);
  return (
    <div className="App">
      <h1>Clock</h1>
      <Clock />
    </div>
  );
}

export default App;
