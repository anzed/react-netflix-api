import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <div className="header-title">netflixroulette</div>
          {this.props.children}
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  children: PropTypes.array.isRequired
};

export default Header;
