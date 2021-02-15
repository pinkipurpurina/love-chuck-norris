import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Root from './components/root';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
        <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

store.subscribe(() => {
  localStorage.setItem('State', JSON.stringify(store.getState()));
});

reportWebVitals();
