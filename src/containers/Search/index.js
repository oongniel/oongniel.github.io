import React, { Component } from 'react';
import moment from 'moment';
import SearchForm from './SearchForm';
import Button from '../../components/Button';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flightList: [],
      selectedType: 'oneWay',
    };
  }

  componentDidMount() {
    const { setFlightList } = this.props;
    // const responseURL =
    // '//raw.githubusercontent.com/oongniel/oongniel.github.io/master/response.json';
    const responseURL = '/response.json';
    fetch(responseURL)
      .then(res => res.json())
      .then(
        result => {
          this.setState({ flightList: result });
        },
        error => {
          // this.setState({
          //   isLoaded: true,
          //   error,
          // });
        },
      );
  }

  handleSearch(searchObj) {
    const { setFilteredFlightList } = this.props;
    const { flightList, selectedType } = this.state;
    // First: filter passenger via availableSeats and format departure and arrival dates
    const filteredData = [];
    _.map(flightList, flight => {
      if (flight.availableSeats > searchObj.passenger) {
        flight.departure = moment(flight.departure).format('YYYY-MM-DD');
        flight.returnDeparture = moment(flight.returnDeparture).format('YYYY-MM-DD');
        filteredData.push(flight);
      }
      return true;
    });
    // delete passenger in search object to properly compare and search through the array
    delete searchObj.passenger;
    searchObj.type = selectedType;
    console.log(filteredData, searchObj);
    // Search flight list
    const filteredFlightList = _.filter(filteredData, searchObj);
    setFilteredFlightList(filteredFlightList, searchObj);
  }

  handleFlightTypeChange(key, e) {
    this.setState({ selectedType: key });
  }

  render() {
    const { selectedType } = this.state;
    const { searching, cleanState } = this.props;
    return (
      <div className={`app-search ${cleanState && 'clean-state'}`}>
        <div className="app-search-content">
          <Button
            type="secondary"
            className={selectedType === 'oneWay' ? 'app-search-btn-selected' : ''}
            onClick={this.handleFlightTypeChange.bind(this, 'oneWay')}
          >
            One Way
          </Button>
          <Button
            type="secondary"
            className={selectedType === 'return' ? 'app-search-btn-selected' : ''}
            onClick={this.handleFlightTypeChange.bind(this, 'return')}
          >
            Return
          </Button>
          <SearchForm handleSearch={this.handleSearch.bind(this)} selectedType={selectedType} searching={searching} />
        </div>
      </div>
    );
  }
}

export default Search;
