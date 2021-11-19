// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import Header from "./components/Header/Header";
// import Carousel from "./components/Carousel/Carousel";
import NTFContainer from "./components/NFTContainer/NFTContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Carousel /> */}
        <NTFContainer />
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
