import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import LandingView from './views/LandingView/LandingView';
import ChallengeView from './views/ChallengeView/ChallengeView';
import LaunchView from './views/LaunchView/LaunchView';
import registerServiceWorker from './registerServiceWorker';

const Router = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LandingView} />
      <Route path="/signup" component={LaunchView} />
      <Route path="/challenge/:id" component={ChallengeView} />
      <Route>
        <h1>404 Not Found</h1>
      </Route>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(Router, document.getElementById('root'));

registerServiceWorker();
