/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as FilmsActions from '../actions/filmsActions';
import Header from './header/Header';
import Filter from './filter/Filter';
import NoResult from './no-result/NoResult';
import FilmsList from './films-list/FilmsList';
import Footer from './footer/Footer';

const App = ({ films, actions }) => (
  <div className="app-container">
    <div className="content">
      <Header actions={actions} />
      <Route path="/" component={Filter} />
      <Switch>
        <Route exact path="/" component={NoResult} />
        {['/film/:filmName', '/search/:searchQuery'].map((path, index) =>
          (<Route exact path={path} key={index}>
            <FilmsList films={films} />
          </Route>)
        )}
        <Redirect from="*" to="/" />
      </Switch>
      <div className="pre-footer" />
    </div>
    <Footer />
  </div>
);

const mapStateToProps = state => ({
  films: state.fetchFilmsSuccess,
  hasErrored: state.fetchFilmsError,
  areFetching: state.filmsAreFetching
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(FilmsActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
