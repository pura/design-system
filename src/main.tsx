import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => <div className="font-sans p-md">Design System</div>;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
