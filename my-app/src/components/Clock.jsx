import React, {useState, useEffect} from "react";

function Clock() {
    const [time, setTime] = useState(new Date());
    const changeTime = () => {
        setTime(new Date())
    }

    useEffect(() => {
        const tick = setInterval(() => {
            changeTime()
        }, 1000)
        return () => clearInterval(tick)
    })
    
    return (
      <div>
        {time.toLocaleTimeString()}
      </div>
    );
}

export default Clock;