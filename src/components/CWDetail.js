import React from 'react';

const CWDetail = () => {
  
    return (
        <section className="contenitore-sez cw-detail">
            <table>
                <tr>
                    <td>Temperatura percepita: json.current.feelslike_c °C</td>
                    <td>Copertura nuvole: json.current.cloud %</td>
                </tr>
                <tr>
                    <td>Precitazioni: json.current.precip_mm mm</td>
                    <td>Umidità: json.current.humidity %</td>
                </tr>
                <tr>
                    <td>Velocità vento: json.current.wind_kph km/h</td>
                    <td>Raffica vento: json.current.gust_kph km/h</td>
                </tr>
                <tr>
                    <td>Direzione vento: json.current.wind_degree</td>
                    <td>Pressione: json.current.pressure_mb mb</td>
                </tr>
            </table>
        </section>
    )
}

export default CWDetail;