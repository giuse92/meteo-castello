import React from 'react';

const CWDetail = ({ currentState, error, isItLoaded}) => {
    
    if (error) return <p>Errore</p>
    else if (!isItLoaded) return <p>In caricamento</p>
    return (
        <section className="contenitore-sez cw-detail">
            <table>
                <caption>Nel dettaglio:</caption>
                <tbody>
                    <tr>
                        <td>Temperatura percepita: {`${currentState.feelslike_c}`} °C</td>
                        <td>Copertura nuvole: {`${currentState.cloud}`} %</td>
                    </tr>
                    <tr>
                        <td>Precitazioni: {`${currentState.precip_mm}`} mm</td>
                        <td>Umidità: {`${currentState.humidity}`} %</td>
                    </tr>
                    <tr>
                        <td>Velocità vento: {`${currentState.wind_kph}`} km/h</td>
                        <td>Raffica vento: {`${currentState.gust_kph}`} km/h</td>
                    </tr>
                    <tr>
                        <td>Direzione vento: {`${currentState.wind_degree}`} °</td>
                        <td>Pressione: {`${currentState.pressure_mb}`} mb</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default CWDetail;