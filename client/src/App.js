import React from "react";
import "./App.css";

//import containers
import TicketsViewer from "./containers/TicketsViewer/TicketsViewer";
import ButtonsBar from "./containers/ButtonsBar/ButtonsBar";

export const App = props => {
  return (
    <div className="App">
      <TicketsViewer />
      <ButtonsBar />
    </div>
  );
};

export default App;
