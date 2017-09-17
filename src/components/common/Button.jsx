import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired
};

export default Button;
