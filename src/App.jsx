import "./App.scss";
import Navigation from "./components/Navigation/Navigation.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <div className="navigator">
        <Navigation />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
