import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onButtonClick(event);
  }

  render() {
    const isActive = this.props.isActive;
    const isDisabled = this.props.isDisabled;

    return (
      <button
        className={isActive ? 'active' : null}
        onClick={this.handleClick}
        disabled={isDisabled}
        title={isDisabled ? 'Currently unavailable' : ''}>
        {this.props.text}
      </button>
    );
  }
}

Button.defaultProps = {
  isActive: false,
  isDisabled: false
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onButtonClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool
};

export default Button;
