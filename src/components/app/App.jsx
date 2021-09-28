import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ChampionListContainer from '../../containers/ChampionListContainer';

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <championListContainer />
      </Route>
    </Switch>
  );
}

