import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchFilmDetails } from '../../actions/FilmsActions';

class FilmItem extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    const film = this.props.data;

    this.props.fetchFilmDetails(film.id);
  }

  render() {
    const data = this.props.data;
    const posterPath = 'https://image.tmdb.org/t/p/w500';

    return (
      <div className="film-item" onClick={this.clickHandler} role="link" tabIndex="-1">
        <Link to={`/film/${data.title}`}>
          <div className="film-image" style={{ backgroundImage: `url(${posterPath + data.poster_path})` }} />
          <div className="film-info">
            <span className="film-title">{data.title}</span>
            <span className="film-year">{data.release_date.slice(0, 4)}</span>
          </div>
        </Link>
      </div>
    );
  }
}

FilmItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired
  }).isRequired,
  fetchFilmDetails: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  fetchFilmDetails: bindActionCreators(fetchFilmDetails, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(FilmItem);
