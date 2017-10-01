import React from 'react';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input type="text" ref={this.props.inputRef} />
    );
  }
}

export default TextInput;
