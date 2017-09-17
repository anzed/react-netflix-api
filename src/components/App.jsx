import React from 'react';
import Header from './header/Header';
import Filter from './filter/Filter';
import FilmsList from './films-list/FilmsList';
import Footer from './footer/Footer';
import './App.less';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <Filter />
        <FilmsList />
        <Footer />
      </div>
    );
  }
}

export default App;
