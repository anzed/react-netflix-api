import React from 'react';
import FilmItem from '../film-item/FilmItem';

class FilmsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      films: []
    };
  }

  renderList() {
    const films = this.state.films;

    return films.length > 0 ?
      films.map(film => <FilmItem data={film} />) :
      <div className="no-result">No films found</div>;
  }

  render() {
    return (
      <div className="films-list">
        {this.renderList()}
      </div>
    );
  }
}

export default FilmsList;
