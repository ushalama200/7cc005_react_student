import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const name = "Usha";
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <MyRouter />
    </div>
  );
}

export default App;
