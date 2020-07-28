import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Main } from "./pages/Main";
import { About } from "./pages/About";
import { NavBar } from "./components/NavBar";
import { Alert } from "./components/Alert";
import { AlertState } from "./context/alert/AlertState";
import { FirebaseState } from "./context/firebase/FirebaseState";
import { createBrowserHistory } from "history";

export const customHistory = createBrowserHistory();

const App = () => {
  return (
    <FirebaseState>
      <AlertState>
        <Router history={customHistory}>
          <NavBar />
          <div className="container pt-4">
            <Alert />
            <Switch>
              <Route path={"/"} exact component={Main} />
              <Route path={"/about"} component={About} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </FirebaseState>
  );
};

export default App;
