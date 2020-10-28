import Dashboard from "./components/Dashboard";
import "./styles/main.scss";
import WeatherContextProvider from "./context/weatherContext";

const App = () => {
  return <main>
    <WeatherContextProvider>
    <Dashboard/>
    </WeatherContextProvider>
  </main>;
};

export default App;
