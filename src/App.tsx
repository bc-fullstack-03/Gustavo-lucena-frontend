import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login"
import SingUp from "./pages/SingUp";
import Home from "./pages/Home";
import Profile from "./pages/ProfilePage";
import Friends from "./pages/Friends";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
  },
  {
    path: '/singup',
    element: <SingUp/>
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/profile',
    element: <Profile/>
  },
  {
    path: '/friends',
    element: <Friends/>
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App