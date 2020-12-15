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
      <footer className="contenitore">
        <span>Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a></span> 
        <span>Sito a scopo informativo, non sono richiesti nè dati nè si fa uso di Analytics per tracciare il traffico</span>
        <a href="mailto:giuseppe.ilsami@gmail.com" rel="nofollow">Email dev</a>
      </footer>
    </>
  );
}

export default App;
