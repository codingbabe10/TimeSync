import React from 'react'
import ReactDOM from 'react-dom/client'
import {UserContext} from './context/UserContext.jsx';
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
      <App />
    </UserContext>
  </React.StrictMode>
)
