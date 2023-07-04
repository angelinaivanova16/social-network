import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  {id: 1, name: 'Sveta'},
  {id: 2, name: 'Kolya'},
  {id: 3, name: 'Victor'},
  {id: 4, name: 'Masha'},
  {id: 5, name: 'Sam'}
];

let messagesData = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'I`m so happy for you!'},
  {id: 3, message: 'Today is gonna be a good day.'}
];

let postsData = [
  {id: 1, message: 'Do not give up, the beginning is always the hardest.', likes: 20},
  {id: 2, message: 'It is my first post. Never stop dreaming.', likes: 30}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
