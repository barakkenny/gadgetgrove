import { createContext, useState, useEffect, useRef } from "react";

export const AppContext = createContext({
  products: [],
});

// eslint-disable-next-line react/prop-types
const AppProvider = ({children}) => {
const [products, setProducts] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
// const [searchQuery, setSearchQuery] = useState('');
const inputValue = useRef("");

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
    }catch (error) {
        console.error('Error fetching products:', error);
    }
}

    return(
        <AppContext.Provider value={{ products, inputValue, searchTerm, searchProduct }}>
            {children}
        </AppContext.Provider>
    )

}

export default AppProvider