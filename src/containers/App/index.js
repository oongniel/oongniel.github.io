import React, { Component } from 'react';
import _ from 'lodash';
import Header from '../Header';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';
import Search from '../Search';
import Results from '../Results';
import Loader from '../../components/Loading';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      fading: false,
      searching: false,
      filteredFlightList: [],
      searchDetails: {},
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ fading: true });
      setTimeout(() => {
        this.setState({ loading: false });
      }, 300);
    }, 3000);
  }

  setFilteredFlightList(list, searchDetails) {
    this.setState({ searching: true });
    this.setState({ filteredFlightList: list, searchDetails });
    setTimeout(() => {
      this.setState({ searching: false });
    }, 2000);
  }

  render() {
    const { loading, fading, searching, filteredFlightList, searchDetails } = this.state;
    const cleanState = _.isEmpty(searchDetails);
    console.log(cleanState);
    return (
      <div className="app-content">
        {true ? <Loader fading={fading} /> : null}
        <div>
          <Header />
          <div className="app-body">
            <Search
              setFilteredFlightList={this.setFilteredFlightList.bind(this)}
              searching={searching}
              cleanState={cleanState}
            />
            <Results
              filteredFlightList={filteredFlightList}
              searchDetails={searchDetails}
              searching={searching}
              cleanState={cleanState}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
