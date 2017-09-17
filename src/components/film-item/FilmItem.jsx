import React from 'react';

class FilmItem extends React.Component {
  render() {
    return (
      <div className="film-item">
        <div className="film-image" />
        <div className="film-info">
          <div className="film-title"></div>
          <div className="film-year"></div>
          <div className="film-genre"></div>
        </div>
      </div>
    );
  }
}

export default FilmItem;
