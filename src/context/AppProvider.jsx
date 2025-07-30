import { createContext, useState, useEffect, useRef } from "react";

export const AppContext = createContext();

const itemFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];

// eslint-disable-next-line react/prop-types
const AppProvider = ({children}) => {
const [products, setProducts] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [cartItems, setCartItems] = useState(itemFromLocalStorage);
const inputValue = useRef("");
const [count, setCount] = useState(0);

const searchProduct = () => {
    const value = inputValue.current?.value || "";
    setSearchTerm(value.toLowerCase());
  };


useEffect(() => {
    fetchProducts();
},[])

const fetchProducts = async () => {

        try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data)
        setProducts(data);
        // setCartItems((prev) => [...prev, data])
    }catch (error) {
        console.error('Error fetching products:', error);
    }
}

    return(
        <AppContext.Provider value={{cartItems, products, inputValue, searchTerm, searchProduct, count, setCount, setCartItems }}>
            {children}
        </AppContext.Provider>
    )

}

export default AppProvider