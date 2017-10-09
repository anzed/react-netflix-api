import React from 'react';
import PropTypes from 'prop-types';
import FilmItem from '../film-item/FilmItem';

class FilmsList extends React.Component {
  renderList() {
    const films = this.props.films;

    return films.length > 0 ?
      films.map(film => <FilmItem data={film} key={film.show_id} />) :
      <div className="no-result">No films found</div>;
  }

  render() {
    return (
      <div className="films-list">
        {this.renderList()}
      </div>
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.array.isRequired
};

export default FilmsList;
