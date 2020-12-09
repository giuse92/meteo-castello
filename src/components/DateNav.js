import React, { useEffect, useState } from 'react';

const DateNav = () => {
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    }

    useEffect(() => {
        setInterval(tick, 1000)
    }, [date])
    
    return (
    <div>
        <span>Castelfranco Emilia&nbsp;⏲️&nbsp;{`${date.getUTCHours()+1}:${date.getUTCMinutes() < 10 ? "0" + date.getUTCMinutes() : date.getUTCMinutes()}`}</span> 
    </div>
    )
}

export default DateNav;