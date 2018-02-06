import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import LevelView from './views/LevelView/LevelView';
import LaunchView from './views/LaunchView/LaunchView';
import registerServiceWorker from './registerServiceWorker';

const Router = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LaunchView} />
      <Route path="/challenge" component={LevelView} />
      <Route>
        <h1>404 Not Found</h1>
      </Route>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(Router, document.getElementById('root'));

registerServiceWorker();
