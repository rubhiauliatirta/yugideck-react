import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  Home,
  Auth,
} from './views'
import { Provider } from 'react-redux'
import store from "./store"
import { PrivateRoute } from "./components";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/auth"><Auth/></Route>
          <PrivateRoute path="/"><Home/></PrivateRoute>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

