import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Main/HomePage";
import About from "./components/Main/About/About";
function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
