import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SelectSlot from './pages/Select-Slot';
import AppLayout from './components/layouts';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {store} from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <AppLayout>
      <SelectSlot />
    </AppLayout>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
