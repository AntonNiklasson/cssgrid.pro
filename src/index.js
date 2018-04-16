import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "glamorous";
import { colors } from "./theme";
import LandingView from "./views/LandingView/LandingView";
import ChallengeView from "./views/ChallengeView/ChallengeView";
import EndView from "./views/EndView/EndView";
import registerServiceWorker from "./registerServiceWorker";
import { trackPage } from "./tracking";

import "./index.css";

const history = createBrowserHistory();

history.listen(location => {
  console.log("Tracking pageview:", location.pathname);
  trackPage(location.pathname);
});

ReactDOM.render(
  <ThemeProvider theme={{ colors }}>
    <Router history={history}>
      <Route>
        <Switch>
          <Route path="/" exact component={LandingView} />
          <Route path="/challenge/:id" component={ChallengeView} />
          <Route path="/theend" component={EndView} />
          <Route>
            <h1>404 Not Found</h1>
          </Route>
        </Switch>
      </Route>
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);

registerServiceWorker();
