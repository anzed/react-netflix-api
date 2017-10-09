import React from 'react';
import PropTypes from 'prop-types';
import Button from '../common/Button';
import TextInput from '../common/TextInput';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.changeSearchParams = this.changeSearchParams.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  changeSearchParams(event) {
    const searchBy = event.target.innerHTML;

    this.props.actions.changeSearchBy(searchBy);
  }

  submitSearch() {
    const searchBy = this.props.searchBy;
    const url = `https://netflixroulette.net/api/api.php?${searchBy}=`;

    this.props.history.push(`/search/${this.inputElement.value}`);
    this.props.actions.fetchFilms(url + this.inputElement.value);
  }

  render() {
    const searchBy = this.props.searchBy;

    return (
      <div className="search-bar">
        <div className="search-title">Find your movie</div>
        <TextInput inputRef={el => this.inputElement = el} />
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
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  searchBy: PropTypes.string.isRequired
};

export default SearchBar;
