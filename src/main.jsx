import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import DashboardPage from './pages/DashboardPage.jsx';
import './index.css'
import SignIn from './components/SignIn.jsx';
import SignInPage from './pages/SignInPage'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/SignIn' element={<SignInPage />} />
      <Route path="dashboard" element={<DashboardPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
