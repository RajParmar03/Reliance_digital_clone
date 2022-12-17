import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Components/AllRoutes";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer.jsx/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
