import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store'
import './App.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

export let rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App data={state} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerender(store.getState())

store.subscribe(() => rerender(store.getState()))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
