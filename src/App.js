import { useState } from "react";
import "./App.css";
import SimpleSidebar from "./Components/Sidebar";
import MainGrid from "./Components/MainGrid";
import { servers } from "./endpoints";

function App() {
  const [currentServer, setCurrentServer] = useState(servers[0]);

  const changeServer = (newServer) => {
    const updatedServer = servers[newServer];
    setCurrentServer(updatedServer);
  };

  return (
    <div className="App">
      <SimpleSidebar changeServer={changeServer} currentServer={currentServer}>
        <MainGrid currentServer={currentServer} />
      </SimpleSidebar>
    </div>
  );
}

export default App;
