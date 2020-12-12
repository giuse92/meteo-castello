import React, { useEffect, useState } from 'react';
import CWDetail from './CWDetail';

const apiKey = process.env.REACT_APP_API_KEY;
const API_URL =`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Castelfranco+Emilia&lang=it`;

const CurrentWeather = () => {
    const [currentState, setCurrentState] = useState({});
    const [conditionState, setConditionState] = useState({});
    const [err, setErr] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                setIsLoaded(true);
                setCurrentState(data.current);
                setConditionState(data.current.condition);
            })
            .catch(err => {
                setIsLoaded(true);
                setErr(err)
            });
    }, [currentState, conditionState, err, isLoaded]);

    if (err) return <p>Errore</p>
    else if(!isLoaded) return <p>In caricamento</p>
    return (
        <>
            <section className="contenitore-sez current-weather">
                <div className="blocco-testuale">
                    <h1>Meteo di Castelfranco Emilia adesso</h1>
                    <p className="sottotitolo">ultimo aggiornamento: {`${currentState.last_updated}`}</p>
                    <p className="gradi">{`${currentState.temp_c}`} °C</p>
                    <p className="descrizione-tempo">{`${conditionState.text}`}</p>
                </div>
                <div className="icona">
                    <img src={`${conditionState.icon}`} alt={`${conditionState.text}`}></img>
                </div>
            </section>
            <CWDetail currentState={currentState} error={err} isItLoaded={isLoaded} />
        </>
    );
}

export default CurrentWeather;