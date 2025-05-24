import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CristiGi from "./components/CristiGi";
import Muntean from "./components/Muntean";
import PresPageCristi from "./components/PresPageCristi";
import PresPageMuntean from "./components/PresPageMuntean";
import Poze from "./components/poze";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <h1>Un site bootleg pentru 2 oameni si mai bootleg</h1>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Muntean />
              <CristiGi />
            </div>
          }
        />
        <Route
          path="/Cristi Gi"
          element={
            <div className="App">
              <PresPageCristi />
            </div>
          }
        />
        <Route
          path="/Razvan Muntean"
          element={
            <div className="App">
              <PresPageMuntean />
            </div>
          }
        />
        <Route
          path="/poze"
          element={
            <div className="pozetotal">
              <Poze />
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
