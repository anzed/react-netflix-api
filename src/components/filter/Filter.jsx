import React from 'react';
import Button from '../common/Button';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortByRelease: true
    };

    this.changeSortParams = this.changeSortParams.bind(this);
  }

  changeSortParams() {
    const currentState = this.state.sortByRelease;

    this.setState({
      sortByRelease: !currentState
    });
  }

  render() {
    return (
      <div className="filter-area">
        <div className="filter-container">
          <div className="total-found">
            Movies counter here
          </div>
          <div className="filter">
            <div className="sort-by">Sort by</div>
            <Button
              text="release date"
              onButtonClick={this.changeSortParams}
              active={this.state.sortByRelease} />
            <Button
              text="rating"
              onButtonClick={this.changeSortParams}
              active={!this.state.sortByRelease} />
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
