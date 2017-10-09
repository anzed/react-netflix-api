import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../common/Button';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortByRelease: true
    };

    this.changeSortParams = this.changeSortParams.bind(this);
  }

  changeSortParams() {
    const currentState = this.state.sortByRelease;

    this.setState({
      sortByRelease: !currentState
    });
  }

  searchView() {
    const counter = this.props.films.length;

    return (
      <div className="filter-container">
        <div className="total-found">
          {
            counter === 1 ?
              `${counter} movie found` :
              `${counter} movies found`
          }
        </div>
        <div className="filter">
          <div className="sort-by">Sort by</div>
          <Button
            text="release date"
            onButtonClick={this.changeSortParams}
            active={this.state.sortByRelease} />
          <Button
            text="rating"
            onButtonClick={this.changeSortParams}
            active={!this.state.sortByRelease} />
        </div>
      </div>
    );
  }

  filmDetailView() {
    const selectedFilm = this.props.selectedFilm;

    return (
      <div className="filter-container">
        <div className="films-by">Films by {selectedFilm.director}</div>
      </div>
    );
  }

  renderFilter() {
    const path = this.props.location.pathname;

    if (path.match('search')) {
      return this.searchView();
    } else if (path.match('film')) {
      return this.filmDetailView();
    }

    return null;
  }

  render() {
    return (
      <div className="filter-area">
        {this.renderFilter()}
      </div>
    );
  }
}

Filter.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  selectedFilm: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  selectedFilm: state.selectFilm,
  films: state.fetchFilmsSuccess,
});

export default connect(
  mapStateToProps
)(Filter);
