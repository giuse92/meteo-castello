import React, { useEffect, useState } from 'react';

const DateNav = (props) => {
    const [date, setDate] = useState(new Date());
    const monthsTxt = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

    useEffect(() => {
        setInterval(setDate(new Date()), 60000)
    }, [date])
    
    return (
    <div>
            <span>📅 {`${date.getUTCDate()} - ${monthsTxt[date.getUTCMonth()]}`}</span><span>⏲️ {`${date.getUTCHours()+1}:${date.getUTCMinutes()}`}</span> 
    </div>
    )
}

export default DateNav;