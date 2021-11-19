import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          {/* <Route path="/" exact component={WarehousesPage} />
        <Route path="/inventory" component={InventoryPage} /> */}
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
