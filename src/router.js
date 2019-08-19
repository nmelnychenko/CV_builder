import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux"

import Home from "./pages/Home";
import PageStructure from "./pages/Layout";

import layout from "./data/layouts.json";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {layout.map((item, index) => (
          <Route path={`/layout${index + 1}`} render={() => (
            <PageStructure layout={item} />
          )} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default connect()(Routes);
