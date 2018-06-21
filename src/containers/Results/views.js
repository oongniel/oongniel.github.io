import React from 'react';
import moment from 'moment';
import _ from 'lodash';
import Button from '../../components/Button';

export const ResultHeader = props => {
  const { searchDetails } = props;
  return (
    <div className="app-results-header">
      <h1 className="app-results-title">
        {searchDetails.origin} > {searchDetails.destination}
      </h1>
      <div className="app-results-sub-title">
        <span>Depart: {moment(searchDetails.departure).format('ll')}</span>
        {searchDetails.returnDeparture && <span>Return: {moment(searchDetails.returnDeparture).format('ll')}</span>}
      </div>
    </div>
  );
};

export const ResultItems = props => {
  const { filteredFlightList } = props;
  return (
    <div className="app-results-wrapper">
      {_.map(filteredFlightList, item => {
        return (
          <div key={item.airlineCode} className="app-results-item">
            <h1 className="app-results-item-header">
              {item.airline} - Rs {item.price}
            </h1>
            <div className="app-results-item-section">
              <span className="app-results-item-detail text-bold">
                {item.airlineCode}-{item.flightNumber}
              </span>
              <span className="app-results-item-detail text-bold text-emphasize">
                {item.origin}-{item.destination}
              </span>
              <span className="app-results-item-detail">Depart: {moment(item.departure).format('h A')}</span>
              <span className="app-results-item-detail">Arrive: {moment(item.arrival).format('h A')}</span>
            </div>
            {item.type === 'return' ? (
              <div className="app-results-item-section">
                <span className="app-results-item-detail text-bold">
                  {item.returnAirlineCode}-{item.returnFlightNumber}
                </span>
                <span className="app-results-item-detail text-bold text-emphasize">
                  {item.destination}-{item.origin}
                </span>
                <span className="app-results-item-detail">Depart: {moment(item.returnDeparture).format('h A')}</span>
                <span className="app-results-item-detail">Arrive: {moment(item.returnArrival).format('h A')}</span>
              </div>
            ) : null}
            <Button type="primary">Book this Flight</Button>
          </div>
        );
      })}
    </div>
  );
};

export const NoFlightsAvailable = props => {
  return (
    <div className="app-results-empty">
      <span>No Flights Available</span>
    </div>
  );
};
