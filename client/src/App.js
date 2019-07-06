import React from "react";
import "./App.css";

//import containers
import TicketsViewer from "./containers/TicketsViewer/TicketsViewer";

export const App = props => {
  return (
    <div className="App">
      <TicketsViewer />
      <div>Button Bar</div>
    </div>
  );
};

export default App;
