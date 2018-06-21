import React, { Component } from 'react';
import moment from 'moment';
// import ResultItems from './ResultItems';
import { ResultHeader, ResultItems, NoFlightsAvailable } from './views';
import Loading from '../../components/Loading/';

class Results extends Component {
  render() {
    const { filteredFlightList, searchDetails, searching, cleanState } = this.props;

    return (
      <div className={`app-results ${cleanState && 'clean-state'}`}>
        {searching ? (
          <Loading type="secondary" />
        ) : (
          <div className="app-results-content">
            <ResultHeader searchDetails={searchDetails} />
            {filteredFlightList.length ? (
              <ResultItems filteredFlightList={filteredFlightList} />
            ) : (
              <NoFlightsAvailable />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Results;
