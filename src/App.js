import logo from './logo.svg';
import './App.css';
import Formatter from './components/Formatter';
import Press from './pages/Press';
import About from './pages/About';
import Home from './pages/Home';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Profile from './pages/Profile';
import Search from './components/Search';
import Todo from './components/todo';



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
        element: <Profile 
       
        />
      },
      {
        path: "/search",
        element: <Search 
       
        />
      },
      {
        path: "/todo",
        element: <Todo 
       
        />
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

