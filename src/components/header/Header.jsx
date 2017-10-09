/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchBar from '../search-bar/SearchBar';
import FilmDetails from '../film-details/FilmDetails';

const Header = () => (
  <header>
    <div className="header-container">
      <div className="header-title">netflixroulette</div>
      <Switch>
        {['/', '/search/:searchQuery'].map((path, index) =>
          <Route exact path={path} key={index} component={SearchBar} />
        )}
        <Route path="/film/:filmName" component={FilmDetails} />
      </Switch>
    </div>
  </header>
);

export default Header;
