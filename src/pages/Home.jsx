import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import { Link } from 'react-router-dom'

const Home = () => {
const { products, searchTerm } = useContext(AppContext);

    const filteredProducts = products.filter((product) =>
    product?.title?.toLowerCase().includes(searchTerm))
  ;

  return (
    <div className="flex flex-wrap justify-center items-center gap-40">
      {filteredProducts.map((product) => (
        <div className="" key={product?.id}>
          <img
            className="w-40 bg-slate-500 border-spacing-1"
            src={product?.image}
          />
          {/* <h2 className='break-words'>{product?.title}</h2> */}
          <p>${product?.price}</p>
          <button><Link to={`/product/${product?.id}`}>View details</Link></button>
        </div>
      ))}
    </div>
  );
};

export default Home;
