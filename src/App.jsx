import "./App.css";
import About from "./assets/components/sections/About";
import Home from "./assets/components/sections/Home";
import Navbar from "./assets/Navbar";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
