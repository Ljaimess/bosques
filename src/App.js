import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Pics from "./pages/pics";
import Footer from "./components/footer";

// import NavBar from "./components/navbar";


function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/pics" component={Pics}/>
        </Switch>
      </React.Fragment>
      <Footer/>
    </Router>
  );

}

export default App;
