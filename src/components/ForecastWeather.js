import React, { useEffect, useState } from 'react';

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

    const toggleForecast = ev => {
        ev.currentTarget.nextElementSibling.style.display === 'none'
            ? ev.currentTarget.nextElementSibling.style.display = 'block'
            : ev.currentTarget.nextElementSibling.style.display = 'none'
    }

    if (err) return <p>Errore</p>
    else if (!isLoaded) return <p>Caricamento in corso...</p>
    return (
        <section className="forecast">
            <small>Previsioni ora per ora di oggi e delle prossime 48 ore</small>
            {forecastDayState.map((elmt, i) => {
                const forecastDate = new Date(elmt.date);
                return (
                    <div className="previsione-giorno" key={`title-${i}`}>
                        <button onClick={toggleForecast}>
                            <span>
                                {`${forecastDate.getDate()}-${forecastDate.getMonth() + 1}-${forecastDate.getFullYear()}`}
                            </span>
                            <span>

                            </span>
                        </button>
                        <div className="previsione-per-ora" style={{ display: 'none' }}>
                            {elmt.hour.map((hour, idx) => {
                                const dayForHours = new Date(hour.time);
                                return (
                                    <div className="dettaglio-per-ora">
                                        <span>
                                            <h5 key={`hour-${idx}`}>{`Alle ${dayForHours.getHours()}:`}</h5>
                                            <img src={`${hour.condition.icon}`} alt={`${hour.condition.text}`}></img>
                                        </span>
                                        <p>{hour.condition.text}</p>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>Temperatura</th>
                                                    <th>Percepiti</th>
                                                    <th>Indice di calore</th>
                                                    <th>Punto di rugiada</th>
                                                    <th>Visibilità</th>
                                                    <th>Possibilità di pioggia</th>
                                                    <th>Possibilità di neve</th>
                                                    <th>Velocità del vento max</th>
                                                </tr>
                                                <tr>
                                                    <td>{hour.temp_c} °C</td>
                                                    <td>{hour.feelslike_c} °C</td>
                                                    <td>{hour.heatindex_c} °C</td>
                                                    <td>{hour.dewpoint_c} °C</td>
                                                    <td>{hour.vis_km} km</td>
                                                    <td>{hour.chance_of_rain} %</td>
                                                    <td>{hour.chance_of_snow} %</td>
                                                    <td>{hour.wind_kph} km/h</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
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