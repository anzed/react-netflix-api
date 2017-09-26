import React from 'react';
import Button from '../common/Button';
import TextInput from '../common/TextInput';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchByTitle: true
    };

    this.changeSearchParams = this.changeSearchParams.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  changeSearchParams() {
    const currentState = this.state.searchByTitle;

    this.setState({
      searchByTitle: !currentState
    });
  }

  submitSearch() {}

  render() {
    return (
      <div className="search-bar">
        <div className="search-title">Find your movie</div>
        <TextInput />
        <div className="search-params">
          <div className="search-by">
            <span>Search by</span>
            <Button
              text="title"
              onButtonClick={this.changeSearchParams}
              active={this.state.searchByTitle} />
            <Button
              text="director"
              onButtonClick={this.changeSearchParams}
              active={!this.state.searchByTitle} />
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

export default SearchBar;
