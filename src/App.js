import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header";
import Blog from "./components/blog";
import LocationFinder from "./components/location-finder";
// import Footer from "./components/footer";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={LocationFinder} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
