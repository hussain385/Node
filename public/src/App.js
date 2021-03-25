import "./App.css";
import Footer from "./components/Nav-Foot-Components/Footer";
import Navbar from "./components/Nav-Foot-Components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./Config/Routing";
import ScrollToTop from "./Config/ScrollToTop";

// Auth provider makes the values available from the context/authContext file
// Router is used trace the location of the routes

function App() {
  return (
    <div className="App">
        <Router>
          <ScrollToTop/>
          <Navbar />
          <Routing />
          <Footer />
        </Router>
    </div>
  );
}

export default App;
