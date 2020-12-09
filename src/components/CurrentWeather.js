import React from 'react';

const CurrentWeather = () => {
    return (
        <section className="contenitore-current-weather">
            <div className="blocco-testuale">
                <h1>Meteo di Castelfranco Emilia adesso</h1>
                <p className="sottotitolo">aggiornato a json.location.localtime</p>
                <p className="gradi">json.current.temp_c °</p>
                <p className="descrizione-tempo">json.current.condition.text</p>
            </div>
            <div className="icona">
                <img src="//cdn.weatherapi.com/weather/64x64/night/113.png" /* json.current.temp_c */ alt=""></img>
            </div>
        </section>
    );
}

export default CurrentWeather;