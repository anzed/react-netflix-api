import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.onPressEnter();
    }
  }

  render() {
    return (
      <input
        type="text"
        ref={this.props.inputRef}
        onKeyPress={this.handleKeyPress} />
    );
  }
}

TextInput.propTypes = {
  onPressEnter: PropTypes.func.isRequired,
  inputRef: PropTypes.func.isRequired
};

export default TextInput;
