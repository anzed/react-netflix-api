/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './header/Header';
import Filter from './filter/Filter';
import NoResult from './no-result/NoResult';
import FilmsList from './films-list/FilmsList';
import Footer from './footer/Footer';

const App = () => (
  <div className="app-container">
    <div className="content">
      <Header />
      <Route path="/" component={Filter} />
      <Switch>
        <Route exact path="/" component={NoResult} />
        {['/film/:filmName', '/search/:searchQuery'].map((path, index) =>
          <Route exact path={path} key={index} component={FilmsList} />
        )}
        <Redirect from="*" to="/" />
      </Switch>
      <div className="pre-footer" />
    </div>
    <Footer />
  </div>
);

export default App;
