import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import MainLayout from './../layout/MainLayout';

export default (props) => (
  <HashRouter>
    <Switch>
      <MainLayout>
      <Route exact path="/" component={HomePage} />
      </MainLayout>      
      <Redirect from="*" to="/" />
    </Switch>
  </HashRouter>
);