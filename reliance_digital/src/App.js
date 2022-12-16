import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Components/AllRoutes";
import Footer from "./Components/Footer.jsx/Footer";
import MainCartPage from "./pages/cartPage/MainCartPage";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">



      <Navbar/>
      <AllRoutes/>
       <Home />
      <MainCartPage />
       <Footer />


    </div>
  );
}

export default App;
