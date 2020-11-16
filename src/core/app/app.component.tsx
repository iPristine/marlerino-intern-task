import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeContext, ThemeType } from '../../context/theme.context';
import { OffersPage } from '../../components/offers/offers-page/offers-page.component';
import { AppsPage } from '../../components/apps/apps-page/apps-page.component';

enum RouteType{
  Apps = '/apps',
  Core = '/',
  Offers = '/offers',
}

export function App() {

  return (
    <ThemeContext.Provider value={ThemeType.Green}>
      <BrowserRouter>
        <Switch>
          <Route exact path={RouteType.Offers} component={OffersPage} />
          <Route exact path={RouteType.Apps} component={AppsPage} />
          <Redirect from={RouteType.Core} to={RouteType.Offers} />
        </Switch>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}
