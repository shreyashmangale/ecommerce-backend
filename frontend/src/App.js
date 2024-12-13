import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Cart from './pages/Cart.jsx';
import Favourites from './pages/Favourites.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Dashboard />} />
        <Route path="/products/category" element={<Dashboard />} />
        <Route path="/singlepage" element={<ProductDetails />} />
        <Route path="/singlepage/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favourites" element={<Favourites />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
