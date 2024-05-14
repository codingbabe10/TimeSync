
import { useContext, useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Context} from "./context/UserContext";
import DashboardPage from './pages/DashboardPage.jsx';
import './index.css'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import ProtectedRoutes from "./components/ProtectedRoutes.jsx"
import RegisterPage from './pages/RegisterPage';

function App() {
  const { user } = useContext(Context);
let router = createBrowserRouter(
      createRoutesFromElements(
        <Route>
          <Route
            path='/SignIn'
            element={!user ?
              <SignInPage />
              : <Navigate to={"/dashboard"} />
            }
          />
          <Route path='register' element={<RegisterPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route element={<ProtectedRoutes />} >
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
        </Route>
      )
    );

  return (
    <RouterProvider router={router} />
  )
}

export default App
