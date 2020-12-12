import React, {useEffect, useState} from 'react';

const apiKey = process.env.REACT_APP_API_KEY;
const API_URL_FORECAST = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Castelfranco+Emilia&lang=it&days=10`;

const ForecastWeather = () => {
    const [forecastDayState, setForecastDayState] = useState([]);
    const [err, setErr] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(API_URL_FORECAST)
            .then(res => res.json())
            .then(data => {
                setIsLoaded(true);
                setForecastDayState(data.forecast.forecastday);
            })
            .catch(err => {
                setIsLoaded(true);
                setErr(err)
            });
    }, [forecastDayState, err, isLoaded]);

    if (err) return <p>Errore</p>
    else if (!isLoaded) return <p>Caricamento in corso...</p>
    return (
        <section className="forecast">
            {forecastDayState.map((elmt, i) => {
                const forecastDate = new Date(elmt.date);
                return (
                    <div key={`title-${i}`}>
                        <button onClick={ev => {
                            ev.currentTarget.nextElementSibling.style.display === 'none' 
                            ? ev.currentTarget.nextElementSibling.style.display = 'block'
                            : ev.currentTarget.nextElementSibling.style.display = 'none' 
                        }}>
                            <h2>
                                {`${forecastDate.getDate()}-${forecastDate.getMonth()}-${forecastDate.getFullYear()}`}
                            </h2>
                        </button>
                        <div style={{ display: 'none' }}>
                            {elmt.hour.map((hour, idx) => {
                                const dayForHours = new Date(hour.time);
                                return (
                                    <p key={`hour-${idx}`}>{`Alle ${dayForHours.getHours()}:`}</p>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default ForecastWeather;