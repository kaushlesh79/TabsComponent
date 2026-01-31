import "./styles.css";
import Home from "./component/Home";
import Calculator from "./component/calculator";
import Gallery from "./component/Gallery";
import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const tabs = ["Home", "Gallery", "Calculator"];
  return (
    <div className="App">
      <div className="Tab_based_Component">
        <nav className="navBar">
          {tabs.map((tab) => (
            <div
              className="navButton"
              key={tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </nav>

        <h1>Tab Based Component</h1>

        {activeTab === "Home" && <Home />}
        {activeTab === "Gallery" && <Gallery />}
        {activeTab === "Calculator" && <Calculator />}
      </div>
    </div>
  );
}
