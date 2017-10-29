import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeSearchBy, fetchFilms } from '../../actions/FilmsActions';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import { API_KEY, SEARCH_BY_TITLE_URL } from '../../constants/Endpoints';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.changeSearchParams = this.changeSearchParams.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  changeSearchParams(event) {
    const searchBy = event.target.innerHTML;

    this.props.changeSearchBy(searchBy);
  }

  submitSearch() {
    const searchBy = this.props.searchBy;
    const url = `${SEARCH_BY_TITLE_URL}?${API_KEY}&query=`;

    this.props.history.push(`/search/${this.inputElement.value}`);
    this.props.fetchFilms(url + this.inputElement.value);
  }

  render() {
    const searchBy = this.props.searchBy;

    return (
      <div className="search-bar">
        <div className="search-title">Find your movie</div>
        <TextInput
          inputRef={el => this.inputElement = el}
          onPressEnter={this.submitSearch} />
        <div className="search-params">
          <div className="search-by">
            <span>Search by</span>
            <Button
              text="title"
              onButtonClick={this.changeSearchParams}
              active={searchBy === 'title'} />
            <Button
              text="director"
              onButtonClick={this.changeSearchParams}
              active={searchBy === 'director'} />
          </div>
          <div className="submit-button">
            <Button
              text="submit"
              onButtonClick={this.submitSearch} />
          </div>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  changeSearchBy: PropTypes.func.isRequired,
  fetchFilms: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  searchBy: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  searchBy: state.changeSearchBy
});

const mapDispatchToProps = dispatch => ({
  changeSearchBy: bindActionCreators(changeSearchBy, dispatch),
  fetchFilms: bindActionCreators(fetchFilms, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
