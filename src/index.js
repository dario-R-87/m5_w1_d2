import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
// redux toolkit
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import reducer
import booksReducer from '../src/reducers/books/booksSlice'

const reducer = combineReducers({
  booksData: booksReducer
})

const store = configureStore({
  reducer
})


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
