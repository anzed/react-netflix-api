import React from 'react';
import Button from '../common/Button';

class Filter extends React.Component {
  render() {
    return (
      <div className="filter-area">
        <div className="filter-container">
          <div className="total-found">
            Movies counter here
          </div>
          <div className="filter">
            <div className="sort">
              <span>Sort by</span>
              <Button text="release date" />
              <Button text="rating" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
