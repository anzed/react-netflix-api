import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class FilmDetails extends React.Component {
  render() {
    const film = this.props.selectedFilm;

    return (
      <div className="film-details">
        <Link to="/">
          <div className="to-search">
            Search
          </div>
        </Link>
        <div className="film-image" style={{ backgroundImage: `url(${film.poster})` }} />
        <div className="film-description">
          <div className="details-head">
            <div className="title">
              <span className="film-title">{film.show_title}</span>
              <span className="rating">{film.rating}</span>
              <span className="genre">{film.category}</span>
            </div>
            <div className="subtitle">
              <span className="year">{film.release_year}</span>
              <span className="duration">{film.runtime}</span>
            </div>
          </div>
          <div className="story">{film.summary}</div>
          <div className="crew">
            <div className="director">Director: {film.director}</div>
            <div className="cast">Cast: {film.show_cast}</div>
          </div>
        </div>
      </div>
    );
  }
}

FilmDetails.propTypes = {
  selectedFilm: PropTypes.shape({
    poster: PropTypes.string,
    show_title: PropTypes.string,
    rating: PropTypes.string,
    category: PropTypes.string,
    release_year: PropTypes.string,
    runtime: PropTypes.string,
    summary: PropTypes.string,
    director: PropTypes.string,
    cast: PropTypes.string,
  }).isRequired
};

export default FilmDetails;
