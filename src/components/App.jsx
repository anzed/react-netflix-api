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

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div className="content">
          <Header
            actions={this.props.actions}
            searchBy={this.props.searchBy}
            selectedFilm={this.props.selectedFilm} />
          <Route path="/" component={Filter} />
          <Switch>
            <Route exact path="/" component={NoResult} />
            {['/film/:filmName', '/search/:searchQuery'].map((path, index) =>
              (<Route exact path={path} key={index}>
                <FilmsList
                  films={this.props.films}
                  areFetching={this.props.areFetching}
                  hasErrored={this.props.hasErrored}
                  actions={this.props.actions} />
              </Route>)
            )}
            <Redirect from="*" to="/" />
          </Switch>
          <div className="pre-footer" />
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  films: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  searchBy: PropTypes.string.isRequired,
  areFetching: PropTypes.bool.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  selectedFilm: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  films: state.fetchFilmsSuccess,
  hasErrored: state.fetchFilmsError,
  areFetching: state.filmsAreFetching,
  searchBy: state.changeSearchBy,
  selectedFilm: state.selectFilm
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(FilmsActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
