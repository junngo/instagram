import React from 'react';
import PropTypes from "prop-types";
import { Route, Switch} from "react-router-dom";
import "./styles.scss";
import Footer from "components/Footer";
import Auth from "components/Auth";
import Navigation from "components/Navigation";
import Feed from "components/Feed";
import Explore from "components/Explore";

const App = props => [
  props.isLoggedIn ? <Navigation key={1} /> : null,
  props.isLoggedIn ? <PrivateRoutes key={2}/> : <PublicRoutes key={2}/>,
  <Footer key={3} />
];

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

const PrivateRoutes = props => (
  <Switch>
    <Route exact path="/" component={Feed} />,
    <Route path="/explore" component={Explore} />
    <Route path="/search/:searchTerm" render={() => "search"} />
  </Switch>
);

const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" component={Auth} />,
    <Route exact path="/forgot" render={() => "password"} />
  </Switch>
);

export default App;
