import "./App.scss";
import Navigation from "./components/Navigation/Navigation.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Searchbar from "./components/Searchbar/Searchbar";

function App() {
  return (
    <div className="App">
      <div className="navigator">
        <Navigation />
      </div>
      <div className="hero-container">
      <h1 className="title">Todo el ocio que necesitas en la ciudad que elijas</h1>
      <h3 className="subtitle">Utiliza el buscador y descubre lo que podemos ofrecerte</h3>
      <video className="videoHero" src="./assets/video.webm" autoplay ></video>
      </div>
      <div className="buscadorHome">
        <Searchbar/>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
