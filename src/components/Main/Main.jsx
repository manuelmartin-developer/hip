import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../Home";
import FormNews from "../FormNews";
import News from "../News";
import Error from "../Error";

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
    };
  }

  addReport = (newReport) => {
    this.setState({news: [...this.state.news, newReport]});
  }

  render() {

    return (
      <main className="main">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/form" component={() => <FormNews addReport={this.addReport} />} />
          <Route path="/list" component={() => <News report={this.state.news} />} />
          <Route component={Error} />
        </Switch>
      </main>
    );
  }
}

export default Main;
