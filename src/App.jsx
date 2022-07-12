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
      </div>
      <img
        className="backroundImage"
        src="https://media.gq.com.mx/photos/619fcd0f7a3578ea6e576d09/16:9/w_2560%2Cc_limit/GettyImages-1285301614-nuevas-experiencias.jpg"
        alt="Backround"
      ></img>
      <div className="buscadorHome">
        <Searchbar />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
