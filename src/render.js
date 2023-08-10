import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addPost } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} addPost={addPost} />
      </React.StrictMode>
    </BrowserRouter>
  );
}