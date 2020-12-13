import './App.css';
import DateNav from './components/DateNav';
import CurrentWeather from './components/CurrentWeather';
import ForecastWeather from './components/ForecastWeather'

function App() {
  const logoUrl = "https://lh3.googleusercontent.com/proxy/2Xz7crsgqGKu2jytl9OYf_pOOJSEnJg2r7u1cjU3P4o8mmokbYSfteGlDZRjj3NHEj43l4oRKldiKUXyePkieDgDt8C7uezluGnkjfIIfrsqjkHW5SZjb1CouDnaIGZMUtHnraBFVIDPe2AMBN9h"
  const logoHref = "https://www.comune.castelfranco-emilia.mo.it/servizi/notizie/notizie_homepage.aspx";
  return (
    <>
      <nav className="contenitore">
          <img src={`${logoUrl}`} alt="Castelfranco Emilia logo"></img>
          <a href={`${logoHref}`}>Comune di Castelfranco Emilia</a>
        <DateNav />
      </nav>
      <main className="contenitore">
        {/*<CurrentWeather /> */ 'CurrentWeather'}
        <ForecastWeather />
      </main>
      <footer>
        Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
      </footer>
    </>
  );
}

export default App;
