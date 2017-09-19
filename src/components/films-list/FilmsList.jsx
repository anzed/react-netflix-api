import React from 'react';
import FilmItem from '../film-item/FilmItem';

class FilmsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [
        { id: 1, title: 'First item', year: '2004', genre: 'Action' },
        { id: 2, title: 'Second item', year: '2001', genre: 'Adventure' },
        { id: 3, title: 'Third item', year: '2012', genre: 'Historic' },
        { id: 4, title: 'Fourth item', year: '2009', genre: 'Detective' }
      ]
    };
  }

  renderList() {
    const films = this.state.films;

    return films.length > 0 ?
      films.map(film => <FilmItem data={film} key={film.id} />) :
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
