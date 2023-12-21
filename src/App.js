import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

import Navbar from "./Components/Header/Navbar";
import Home from "./Components/Screens/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Home />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
