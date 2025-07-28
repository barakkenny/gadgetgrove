import Home from "./pages/Home"
import Nav from './components/Nav'
import { Routes, Route} from 'react-router-dom';
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  
  return (
    <div>
      <Nav />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App
