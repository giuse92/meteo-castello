import './App.css';
import DateNav from './components/DateNav';
import CurrentWeather from './components/CurrentWeather';
import ForecastWeather from './components/ForecastWeather'

function App() {
  const logoUrl = "https://lh3.googleusercontent.com/proxy/_qnRNlAxG2-50zMxrHiUq4dMJKRcWla1SKehmtSE0r6Xssrhy7J0phsawu9PJytuZwI1XdaGGkqxnQmP9Z2k_vZF9bpJZ0FDj8yBUGAVe-ZkF34vWNZ8Si7Y63SRFtO2AbGdjaxUWqOzvSw6MtOn"
  const logoHref = "https://www.comune.castelfranco-emilia.mo.it/servizi/notizie/notizie_homepage.aspx";
  return (
    <>
      <nav className="contenitore">
        <a href={`${logoHref}`}>
          <img src={`${logoUrl}`} alt="Castelfranco Emilia logo"></img>
        </a>
        <DateNav />
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
