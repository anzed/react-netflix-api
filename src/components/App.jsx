import React from 'react';
import PropTypes from 'prop-types';
import Footer from './footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div className="content">
          {this.props.children}
          <div className="pre-footer" />
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.array.isRequired
};

export default App;
