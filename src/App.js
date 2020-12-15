import './App.css';
import CurrentWeather from './components/CurrentWeather';
import ForecastWeather from './components/ForecastWeather'

function App() {
  const logoUrl = "https://upload.wikimedia.org/wikipedia/it/d/d6/Castelfranco_Emilia-Stemma.png"
  const logoHref = "https://www.comune.castelfranco-emilia.mo.it/servizi/notizie/notizie_homepage.aspx";
  return (
    <>
      <nav className="contenitore">
        <a href={`${logoHref}`}>
          <img src={`${logoUrl}`} alt="Castelfranco Emilia logo"></img>
        </a>
      </nav>
      <main className="contenitore">
        <CurrentWeather />
        <ForecastWeather />
      </main>
      <footer>
        Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
      </footer>
    </>
  );
}

export default App;
