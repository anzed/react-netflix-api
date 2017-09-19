import React from 'react';
import Header from './header/Header';
import Filter from './filter/Filter';
import FilmsList from './films-list/FilmsList';
import Footer from './footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div className="content">
          <Header />
          <Filter />
          <FilmsList />
          <div className="pre-footer" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
