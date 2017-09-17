import React from 'react';
import TextInput from '../common/TextInput';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <div className="search-title">Find your movie</div>
        <TextInput />
        <div className="search-params">
          <span>Search by</span>
        </div>
      </div>
    );
  }
}

export default SearchBar;
