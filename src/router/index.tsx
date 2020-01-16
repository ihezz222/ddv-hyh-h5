import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home/Home';
import Goods from '../views/Goods/Goods';

const BasicRoute = (): JSX.Element => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/goods" component={Goods} />
      </Switch>
    </React.Fragment>
  );
};
export default BasicRoute;
