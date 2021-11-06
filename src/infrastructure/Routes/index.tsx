import React from "react";
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";

import { useDispatch } from "react-redux";
import { linkRoutes } from "../Util/constants";
import { _scroll } from "../Redux/actions/scrollAction";
import { _width } from "../Redux/actions/widthAction";
import Home from "../Pages/Home";
import Detail from "../Pages/Detail";

const Routes = () => {
  const dispatch = useDispatch();

  const scrollAnimation = () => {
    dispatch(_scroll(document.documentElement.scrollTop));
  };

  const screenAnimation = () => {
    dispatch(_width(window.screen.width));
  };

  React.useEffect(()=>{
    window.onscroll = () => scrollAnimation();
    window.onresize = () => screenAnimation();
  });
  return <Router>
    <Switch>
      <Route exact path={`${linkRoutes.Home}`} component={Home} />
      <Route exact path={`${linkRoutes.Detail}/:id`} component={Detail} />
    </Switch>
  </Router>;
};

export default Routes;