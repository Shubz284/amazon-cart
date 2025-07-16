import React from 'react'
import {createBrowserRouter, createRoutesFromElements,  Route, RouterProvider} from'react-router'
import AmazonCart from './component/AmazonCart';
import Navbar from './component/Navbar';
import WishList from './component/WishList';
import Notfound from './component/Notfound';

const App = () => {
   const router = createBrowserRouter(
     createRoutesFromElements(
       <Route path="/" element={<Navbar />}>
         <Route index element={<WishList />} />
         <Route path="cart" element={<AmazonCart />} />
         <Route path="*" element={<Notfound />} />
       </Route>
     )
   );
  return (
    <RouterProvider router={router} />
  )
}

export default App