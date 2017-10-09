import React from 'react';
import PropTypes from 'prop-types';
import FilmItem from '../film-item/FilmItem';
import NoResult from '../no-result/NoResult';

class FilmsList extends React.Component {
  renderList() {
    const films = this.props.films;
    const hasErrored = this.props.hasErrored;

    return films.length > 0 || !hasErrored ?
      films.map(film => <FilmItem data={film} key={film.show_id} />) :
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
  hasErrored: PropTypes.bool.isRequired
};

export default FilmsList;
