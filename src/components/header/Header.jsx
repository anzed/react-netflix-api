/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from '../search-bar/SearchBar';
import FilmDetails from '../film-details/FilmDetails';

const Header = props => (
  <header>
    <div className="header-container">
      <div className="header-title">netflixroulette</div>
      <Switch>
        {['/', '/search/:searchQuery'].map((path, index) =>
          (<Route
            exact
            path={path}
            key={index}
            render={history => (
              <SearchBar
                actions={props.actions}
                history={history.history}
                searchBy={props.searchBy} />
            )} />)
        )}
        <Route path="/film/:filmName">
          <FilmDetails actions={props.actions} selectedFilm={props.selectedFilm} />
        </Route>
      </Switch>
    </div>
  </header>
);

Header.propTypes = {
  actions: PropTypes.object.isRequired,
  selectedFilm: PropTypes.object.isRequired
};

export default Header;
