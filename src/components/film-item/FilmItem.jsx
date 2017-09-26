import React from 'react';
import PropTypes from 'prop-types';

class FilmItem extends React.Component {
  render() {
    const data = this.props.data;

    return (
      <div className="film-item">
        <div className="film-image" />
        <div className="film-info">
          <span className="film-title">{data.title}</span>
          <span className="film-year">{data.year}</span>
        </div>
        <div className="film-genre">{data.genre}</div>
      </div>
    );
  }
}

FilmItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired
  }).isRequired
};

export default FilmItem;
