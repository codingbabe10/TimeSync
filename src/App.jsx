
import { useContext } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import {Context} from "./context/UserContext";
import DashboardPage from './pages/DashboardPage.jsx';
import './index.css'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";

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
          <Route path='/signup' element={<SignUpPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
      )
    );

  return (
    <RouterProvider router={router} />
  )
}

export default App
