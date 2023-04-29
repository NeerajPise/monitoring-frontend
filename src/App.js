import { useState } from "react";
import "./App.css";
import SimpleSidebar from "./Components/Sidebar";
import { serverConstants } from "./constants";
import MainGrid from "./Components/MainGrid";

function App() {
  const [currentServer, setCurrentServer] = useState(
    serverConstants.MACHINE_ONE
  );

  const changeServer = (newServer) => {
    setCurrentServer(newServer);
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
