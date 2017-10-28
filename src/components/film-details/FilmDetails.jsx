import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FilmDetails = (props) => {
  const film = props.selectedFilm;
  const posterPath = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="film-details">
      <Link to="/">
        <div className="to-search">
          Search
        </div>
      </Link>
      <div className="film-image" style={{ backgroundImage: `url(${posterPath + film.poster_path})` }} />
      <div className="film-description">
        <div className="details-head">
          <div className="title">
            <span className="film-title">{film.title}</span>
            <span className="rating">{film.vote_average}</span>
            <span className="genre">{film.category}</span>
          </div>
          <div className="subtitle">
            <span className="year">{film.release_date}</span>
            <span className="duration">{film.runtime} min</span>
          </div>
        </div>
        <div className="story">{film.overview}</div>
      </div>
    </div>
  );
};

FilmDetails.propTypes = {
  selectedFilm: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    category: PropTypes.string,
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string,
  }).isRequired
};

const mapStateToProps = state => ({
  selectedFilm: state.selectFilm
});

export default connect(
  mapStateToProps
)(FilmDetails);
