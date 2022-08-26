import { useState } from "react";
import {
  BrowserRouter,
  Router,
  Route,
  Link,
  Routes,
  Outlet,
} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "@glideapps/glide-data-grid/dist/index.css";
import Connection from "./compoents/database/connection";
import Settings from "./compoents/database/settings";
import Dashboard from "./compoents/dashboard/dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="root-app">
      <div className="App">
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <div className="card">
          <nav>
            
        </nav>
        </div>
      </div>

      {/* <nav>
        <ul>
          <li>
            <Link to={"/"}> Home </Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
        </ul>
      </nav> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="newConnection" element={<Connection />} />
          <Route path=":ConnectionId" element={<Settings />} />
          <Route path="settings" element={<Settings />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
