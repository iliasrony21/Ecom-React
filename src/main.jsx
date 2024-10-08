import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Profile from './Components/Profile.jsx'
import App from './App';
import Login from './Components/Login.jsx'
import Registration from './Components/Registration.jsx'
import Forgot from './Components/Forgot.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Wrap pages with App component for common Header/Footer
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/forgot",
        element: <Forgot />,
      },
      // Add other child routes here if needed
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
