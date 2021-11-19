// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import Header from "./components/Header/Header";
// import NTFContainer from "./components/NFTContainer/NFTContainer";
// import Hero from "./components/Hero/Hero";
// import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <div
      className="App"
      style={{
        // maxWidth: 1200,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 64,
      }}
    >
      <Router>
        <Header />
        {/* <NTFContainer /> */}
        {/* <Carousel>
          <div>
            <h1>What is an NFT?</h1>
            <p>Answer 1</p>
            <p>Answer 2</p>
            <p>Answer 3</p>
            <p>Answer 4</p>
            <button>Submit</button>
          </div>
          <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
          <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
          <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        </Carousel> */}
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
