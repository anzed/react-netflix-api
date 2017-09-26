import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './components/App';
import Header from './components/header/Header';
import SearchBar from './components/search-bar/SearchBar';
import FilmDetails from './components/film-details/FilmDetails';
import FilmsList from './components/films-list/FilmsList';
import Filter from './components/filter/Filter';
import NoResult from './components/no-result/NoResult';

const routes = [
  {
    path: '/',
    exact: true,
    header: match => <SearchBar match={match} />,
    filter: match => <Filter match={match} />,
    main: () => <NoResult />
  },
  {
    path: '/search/:searchQuery',
    header: match => <SearchBar match={match} />,
    filter: match => <Filter match={match} />,
    main: () => <FilmsList />
  },
  {
    path: '/film/:filmName',
    header: match => <FilmDetails match={match} />,
    filter: match => <Filter match={match} />,
    main: () => <FilmsList />
  }
];

const render = () => {
  ReactDOM.render(
    <Router>
      <Switch>
        <App>
          <Header>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.header}
              />
            ))}
          </Header>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.filter}
            />
          ))}
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
          <Redirect from="*" to="/" />
        </App>
      </Switch>
    </Router>,
    document.getElementById('root')
  );
};

render();
