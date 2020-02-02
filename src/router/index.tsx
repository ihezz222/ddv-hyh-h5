import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home/Home';
import Goods from '../views/Goods/Goods';
import UserRouter from './user';

export interface IRouter {
  path: string;
  component: React.ComponentType;
}

const routerList: IRouter[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: 'goods',
    component: Goods,
  },
].concat(UserRouter, []);

const BasicRoute = (): JSX.Element => {
  return (
    <React.Fragment>
      <Switch>
        {routerList.map((route: IRouter, index: number) => {
          return <Route exact path={route.path} component={route.component} key={'router_item_' + index} />;
        })}
      </Switch>
    </React.Fragment>
  );
};
export default BasicRoute;
