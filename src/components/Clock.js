import React from "react";
import './Clock.css';

function Clock()  {
    return(
        <div>
            <div className="clock">
                <div className="face">
                    <div id="secondHand" className="hand second"></div>
                    <div id="minuteHand" className="hand minute"></div>
                    <div id="hourHand" className="hand hour"></div>
                    <div className=" hand center"></div>
                </div>
            </div>
        </div>
    )
}

export default Clock;