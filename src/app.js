import './styles/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

const renderApplication = () => {
  ReactDOM.render(<App />, document.querySelector('#root'));
};

renderApplication(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    renderApplication();
  });
}
