<<<<<<< HEAD
// @flow

import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import type { Match } from 'react-router-dom';
import AsyncRoute from './AsyncRoute';
import store from './store';
import preload from '../data.json';

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Route exact path="/" component={props => <AsyncRoute props={props} loadingPromise={import('./Landing')} />} />
      <Route
        path="/search"
        component={props => (
          <AsyncRoute loadingPromise={import('./Search')} props={Object.assign({ shows: preload.shows }, props)} />
        )}
      />
      <Route
        path="/details/:id"
        component={(props: { match: Match }) => {
          const selectedShow = preload.shows.find((show: Show) => props.match.params.id === show.imdbID);
          return (
            <AsyncRoute
              loadingPromise={import('./Details')}
              props={Object.assign({ show: selectedShow, match: {} }, props)}
            />
          );
        }}
      />
    </div>
  </Provider>
);

=======
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

>>>>>>> v3-11
export default App;
