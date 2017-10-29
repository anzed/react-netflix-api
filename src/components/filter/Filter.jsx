import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '../common/Button';
import { sortByRelease } from '../../actions/FilmsActions';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.changeSortParams = this.changeSortParams.bind(this);
  }

  changeSortParams() {
    const byRelease = this.props.byRelease;

    this.props.sortByRelease(!byRelease);
  }

  searchView() {
    const counter = this.props.films.length;
    const byRelease = this.props.byRelease;

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
            active={byRelease} />
          <Button
            text="rating"
            onButtonClick={this.changeSortParams}
            active={!byRelease} />
        </div>
      </div>
    );
  }

  renderFilter() {
    const path = this.props.location.pathname;

    if (path.match('search')) {
      return this.searchView();
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
  films: PropTypes.array.isRequired,
  sortByRelease: PropTypes.func.isRequired,
  byRelease: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  selectedFilm: state.selectFilm,
  films: state.fetchFilmsSuccess,
  byRelease: state.sortByRelease
});

const mapDispatchToProps = dispatch => ({
  sortByRelease: bindActionCreators(sortByRelease, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
