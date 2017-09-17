import React from 'react';
import FilmItem from '../film-item/FilmItem';

class FilmsList extends React.Component {
  render() {
    return (
      <div className="films-list">
        <FilmItem />
      </div>
    );
  }
}

export default FilmsList;
