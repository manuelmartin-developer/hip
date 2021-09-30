import React from "react";
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import Form from '../Form';
import News from '../News';
import Error from '../Error';

const Main = () => {
  return (
    <main className="main">
      <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/form' component={Form} />
          <Route path='/list' component={News} />
          <Route component={Error} />
        </Switch>
    </main>
    )
};

export default Main;
