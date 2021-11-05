import "./App.css";
import Container from "./components/Container/Container";
import {WeatherContextProvider} from "./context/WeatherContext";

function App() {
  return (
    <WeatherContextProvider>
      <Container />
    </WeatherContextProvider>
  );
}

export default App;
