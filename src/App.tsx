import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { SideBar } from "./Components/SideBar/SideBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex">
      <SideBar />
    </div>
  );
}

export default App;
