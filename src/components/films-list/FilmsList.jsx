import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FilmItem from '../film-item/FilmItem';
import NoResult from '../no-result/NoResult';

class FilmsList extends React.Component {
  sortByRelease(a, b) {
    return parseInt(b.release_date.slice(0, 4), 10) - parseInt(a.release_date.slice(0, 4), 10);
  }

  sortByRating(a, b) {
    return b.vote_average - a.vote_average;
  }

  renderList() {
    const films = this.props.films;
    const hasErrored = this.props.hasErrored;
    const sortBy = this.props.byRelease ? this.sortByRelease : this.sortByRating;

    return films.length > 0 || !hasErrored ?
      films.sort(sortBy).map(film => <FilmItem data={film} key={film.id} />) :
      <NoResult />;
  }

  render() {
    const areFetching = this.props.areFetching;

    return (
      <div className="films-list">
        {
          areFetching ?
            <div className="loading-message">Loading, please wait...</div> :
            this.renderList()
        }
      </div>
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
  areFetching: PropTypes.bool.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  byRelease: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  films: state.fetchFilmsSuccess,
  hasErrored: state.fetchFilmsError,
  areFetching: state.filmsAreFetching,
  byRelease: state.sortByRelease
});

export default connect(
  mapStateToProps
)(FilmsList);
