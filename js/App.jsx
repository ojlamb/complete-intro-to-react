import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { shape, string } from "prop-types";
import { Provider } from 'react-redux';
import store from './store';
import Landing from "./Landing";
import Search from "./Search";
import Details from "./Details";
import preload from "../data.json";

const FourOhFour = () => <h1>404 Page not Found</h1>;

const App = () => (
  <BrowserRouter>
  <Provider store={store}>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route
          exact
          path="/search"
          component={props => <Search shows={preload.shows} {...props} />}
        />
        <Route
          path="/details/:id"
          component={props => {
            const selectedShow = preload.shows.find(
              show => props.match.params.id === show.imdbID
            );
            return <Details show={selectedShow} {...props} />;
          }}
        />
        <Route component={FourOhFour} />
      </Switch>
    </div>
    </Provider>
  </BrowserRouter>
);

App.propTypes = {
  match: shape({
    params: shape.isRequired,
    path: string.isRequired,
    url: string.isRequired
  })
};

export default App;
