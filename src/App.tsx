import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login"
import SingUp from "./pages/SingUp";
import Home from "./pages/Home";
import Profile from "./pages/ProfilePage";
import Friends from "./pages/Friends";
import PostDetail from "./pages/PostDetail";

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
  },
  {
    path: '/post/:postId',
    element: <PostDetail/>
  }
])

function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App