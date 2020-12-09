import './App.css';
import DateNav from './components/DateNav';
import CurrentWeather from './components/CurrentWeather'

function App() {
  return (
    <>
      <nav>
        <p>Il meteo di Castello</p> <DateNav />
      </nav>
      <main className="contenitore">
        <CurrentWeather />
      </main>
      <footer>
        Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
      </footer>
    </>
  );
}

export default App;
