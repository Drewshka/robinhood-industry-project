// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Landing from "./pages/Landing/Landing";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/landing"
            render={(props) => {
              return <Landing {...props} />;
            }}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
