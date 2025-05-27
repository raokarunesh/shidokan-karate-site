import "./App.css";
import About from "./assets/components/sections/About";
import Home from "./assets/components/sections/Home";
import Locations from "./assets/components/sections/Locations";
import Navbar from "./assets/Navbar";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <Locations />
    </div>
  );
}

export default App;
