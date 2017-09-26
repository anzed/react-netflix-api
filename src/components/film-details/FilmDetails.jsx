import React from 'react';

class FilmDetails extends React.Component {
  render() {
    return (
      <div className="film-details">
        <div className="film-image" />
        <div className="film-description">
          <div className="details-head">
            <div className="title">
              <span className="rating"></span>
            </div>
            <div className="subtitle">
              <span className="year"></span>
              <span className="duration"></span>
            </div>
          </div>
          <div className="story"></div>
          <div className="crew">
            <div className="director"></div>
            <div className="cast"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilmDetails;