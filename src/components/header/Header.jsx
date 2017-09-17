import React from 'react';
import SearchBar from '../search-bar/SearchBar';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <div className="header-title">netflixroulette</div>
          <SearchBar />
        </div>
      </header>
    );
  }
}

export default Header;
