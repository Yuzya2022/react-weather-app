import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
    <Weather defaultCity ="Berlin"/>
    <footer>
      This project was coded by <a href="https://elaborate-cendol-df60aa.netlify.app/about.html" target="_blank" rel="noreferrer noopener">Olga Iuzvyshyna</a> and is{" "}
    <a href="https://github.com/Yuzya2022/react-weather-app" target="_blank" rel="noreferrer noopener">open-sourced on GitHub</a> and <a href="https://gorgeous-gnome-52b55d.netlify.app/" target="_blank" rel="noreferrer noopener">hosted on Netlify</a>
    </footer>
    </div>
    </div>
  );
}

