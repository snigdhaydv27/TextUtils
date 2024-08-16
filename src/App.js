import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "grey";
    }
  };
  return (
    <Router>
      <>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <div className="container my-3">
          <Routes>
            <Route
              exact path="/"
              element={<TextForm heading="Enter Your Text to analyse belolw" />}
            />
            <Route exact path="/about" element={<About mode={mode}/>} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
