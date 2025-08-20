import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import AllProducts from './Pages/AllProducts'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'
import Categories from './Pages/Categories'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all-products' element={<AllProducts />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/categories' element={<Categories />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
