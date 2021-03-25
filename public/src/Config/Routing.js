import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Container/Home";
import Portfolio from "../Container/Portfolio";
import Contact from "../Container/Contact";

// Routing component. If want to add another just create a file in container and used it as the route here

const Routing = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default Routing;
