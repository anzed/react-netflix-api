import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onButtonClick();
  }

  render() {
    return (
      <button
        className={this.props.active ? 'active' : null}
        onClick={this.handleClick}>
        {this.props.text}
      </button>
    );
  }
}

Button.defaultProps = {
  active: false
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onButtonClick: PropTypes.func.isRequired
};

export default Button;
