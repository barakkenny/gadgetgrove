import Home from "./pages/Home"
import Nav from './components/Nav'
import { Routes, Route} from 'react-router-dom';
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import BuyNow from "./pages/BuyNow";

const App = () => {
  
  return (
    <div>
      <Nav />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/buy-now" element={<BuyNow />} />
      </Routes>
    </div>
  )
}

export default App
