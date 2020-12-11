import React from 'react';
import CWDetail from './CWDetail';

const apiKey = process.env.REACT_APP_API_KEY;
const place = "Castelfranco Emilia";

//https://api.weatherapi.com/v1/current.json?key=apiKey&q=place&lang=it

const CurrentWeather = () => {

    return (
        <>
        <section className="contenitore-sez current-weather">
            <div className="blocco-testuale">
                <h1>Meteo di Castelfranco Emilia adesso</h1>
                <p className="sottotitolo">ultimo aggiornamnto: json.current.last_updated</p>
                <p className="gradi">json.current.temp_c °C</p>
                <p className="descrizione-tempo">json.current.condition.text</p>
            </div>
            <div className="icona">
                <img src="json.current.condition.icon" /* json.current.temp_c */ alt=""></img>
            </div>
        </section>
        <CWDetail />
        </>
    );
}

export default CurrentWeather;