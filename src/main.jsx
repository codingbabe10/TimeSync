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
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/SignIn' element={<SignInPage />} />
      <Route path='/SignUp' element={<SignUpPage />} />
      <Route path="dashboard" element={<DashboardPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
