import logo from './logo.svg';
import './App.css';
import Formatter from './components/Formatter';
import Press from './pages/Press';
import About from './pages/About';
import Home from './pages/Home';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Profile from './pages/Profile';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Formatter />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/press",
        element: <Press />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/profile",
        element: <Profile />
      }
    ]
  },
])
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
   
  );
}

export default App;

