
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import Products from './pages/Products'
import AboutUs from './pages/AboutUs'
import Reviews from './pages/Reviews';
import ContactUs from './pages/ContactUs'
import Cart from './pages/Cart'
import Root from './components/Root'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/reviews' element={<Reviews/>} />
        <Route path='/contactus' element={<ContactUs/>} />
        <Route path='/cart' element={<Cart/>} />

      </Route>
    )
  )

  return (
    <>
   
    <RouterProvider router={router}/>
    </>
  )
}

export default App
