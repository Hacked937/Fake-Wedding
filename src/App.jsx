import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Applayout from './layout/app-layout';
import Home from './pages/home';
import EventRegistration from './pages/EventRegistration';
import Register from './pages/Register';
import EventDetails from './components/EventDetails';
const router = createBrowserRouter([
  {
    element:<Applayout/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      
      {
        path:"/eventregistration",
        element:<EventRegistration/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/event/:id",
        element:<EventDetails/>
      },
    
    ]
  }
])

function App() {
 return <RouterProvider router={router} />
}

export default App