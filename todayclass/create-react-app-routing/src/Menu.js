import React from 'react'
import { Home } from './Home'
import { About } from './About'
import {
    BrowserRouter,
    HashRouter,
    createBrowserRouter,
    createHashRouter,
    RouterProvider,
    Route,
    Link,
    Routes,
  } from "react-router-dom";
  
// const router = createHashRouter([
//     {
//       path: "/",
//       element: <Home />
//     },
//     {
//         path: "home",
//         element: <Home />
//       },
//     {
//       path: "about",
//       element:<About />
//     },
//   ]);
export const Menu = () => {
  return (
    <div>
    
        {/* <a href="#/home">Home</a>
        <a href='#/about'>About</a> 
      <RouterProvider router={router} /> */}
    
       
    <HashRouter>
       <Link to="home">Home</Link>
       <Link to="about" >About</Link>
     <Routes>
        <Route path="/" element={<Home ></Home>} />
        <Route path="/home" element={<Home ></Home>} />
        <Route path="/about" element={<About ></About>} />
     </Routes>
    </HashRouter>
   
    </div>
 
  )
}
