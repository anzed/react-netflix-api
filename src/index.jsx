import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import Header from './components/header/Header';
import SearchBar from './components/search-bar/SearchBar';
import FilmDetails from './components/film-details/FilmDetails';
import FilmsList from './components/films-list/FilmsList';
import Filter from './components/filter/Filter';
import NoResult from './components/no-result/NoResult';

const render = () => {
  ReactDOM.render(
    <Router>
      <App>
        <Header>
          {['/', '/search/:searchQuery'].map(path =>
            <Route exact path={path} component={SearchBar} />
          )}
          <Route path="/film/:filmName" component={FilmDetails} />
        </Header>
        <Filter />
        <Route exact path="/" component={NoResult} />
        {['/film/:filmName', '/search/:searchQuery'].map(path =>
          <Route path={path} component={FilmsList} />
        )}
      </App>
    </Router>,
    document.getElementById('root')
  );
};

render();
