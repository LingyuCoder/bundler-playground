import React from 'preact-like-framework';
import ReactDOM from 'preact-like-framework/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

if (module.hot) {
  module.hot.accept();
}
