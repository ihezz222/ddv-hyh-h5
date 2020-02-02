import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';
import { BrowserRouter, Route } from 'react-router-dom';
const Root = (): JSX.Element => {
  return (
    <BrowserRouter basename="/">
      <Route path={`/`} component={App}></Route>
    </BrowserRouter>
  );
};
ReactDOM.render(<Root />, document.getElementById('app'));
