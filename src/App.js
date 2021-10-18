import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { AppHeader, AppFooter } from "./core";
// import { Home, Team, Contact } from "./components/public";
import * as app from "./components";
const App = () => {
  return (
    <Router>
      <AppHeader />
      <div className="container">
        <Switch>
          <Route exact path="/" component={app.Home} />
          <Route exact path="/home" component={app.Home} />
          <Route exact path="/team" component={app.Team} />
          <Route exact path="/contact" component={app.Contact} />
          <Route exact path="/dashboard" component={app.Dashboard} />
          <Route exact path="/mentors" component={app.Mentors} />
          <Route exact path="/students" component={app.Students} />
          <Route exact path="/projects" component={app.Projects} />
          <Redirect to="/" />
        </Switch>
      </div>
      <AppFooter />
    </Router>
  );
};

export default App;
