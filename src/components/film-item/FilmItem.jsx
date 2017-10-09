import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class FilmItem extends React.Component {
  constructor(props) {
    super(props);

    this.selectFilm = this.selectFilm.bind(this);
  }

  selectFilm() {
    const film = this.props.data;

    this.props.actions.selectFilm(film);
  }

  render() {
    const data = this.props.data;

    return (
      <div className="film-item" onClick={this.selectFilm} role="link" tabIndex="-1">
        <Link to={`/film/${data.show_title}`}>
          <div className="film-image" style={{ backgroundImage: `url(${data.poster})` }} />
          <div className="film-info">
            <span className="film-title">{data.show_title}</span>
            <span className="film-year">{data.release_year}</span>
          </div>
          <div className="film-genre">{data.category}</div>
        </Link>
      </div>
    );
  }
}

FilmItem.propTypes = {
  data: PropTypes.shape({
    show_id: PropTypes.number.isRequired,
    show_title: PropTypes.string.isRequired,
    release_year: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
  }).isRequired,
  actions: PropTypes.shape({
    selectFilm: PropTypes.func.isRequired
  }).isRequired
};

export default FilmItem;
