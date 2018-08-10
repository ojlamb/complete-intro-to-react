import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { shape, string } from "prop-types";
import Landing from "./Landing";
import Search from "./Search";
import Details from "./Details";
import preload from "../data.json";

const FourOhFour = () => <h1>404 Page not Found</h1>;

const App = () => (
  <BrowserRouter>
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
              show => props.show.params.id === show.imdbID
            );
            return <Details show={selectedShow} {...props} />;
          }}
        />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

App.propTypes = {
  show: shape({
    poster: string.isRequired,
    title: string.isRequired,
    year: string.isRequired,
    description: string.isRequired,
    trailer: string.isRequired
  })
};

export default App;
