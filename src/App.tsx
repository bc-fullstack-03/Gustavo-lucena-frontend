import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login"
import SingUp from "./pages/SingUp";
import Home from "./pages/Home";

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
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App