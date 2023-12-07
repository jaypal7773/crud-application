import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Main from './Main';
import Add from './Add';
import Listing from './Listing';

function App() {
  const routes = createBrowserRouter(
    [
      {
        path:"/",
        element:<Main/>,
        children:[
          {
            path:"/",
            element:<Add/>
          },
          {
            path:"/listing",
            element:<Listing/>
          }
        ]
      }
    ]
  )
  return (
    <RouterProvider router={routes}/>
  )
}

export default App