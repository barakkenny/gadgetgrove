/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'
import itemAdded from '../components/notifications/ItemAdded'

export const CartContext = createContext()

// export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) =>  {
    const [cartItems, setCartItems] = useState(() => {
        const storedItems = localStorage.getItem('items');
        console.log(storedItems)
        return storedItems ? JSON.parse(storedItems) : []
    });

    const [itemCount, setItemCount] = useState(0);


    const addToCart = (product) => {
        // if(itemCount === 0) {
        //     alert('add at least a quantity')
        // }

        const inCart = cartItems.find(item => item.id === product.id)

        if(itemCount === 0) {
            alert('add at least a quantity')
        }else if(inCart){
            setCartItems(cartItems.map(item => {
             item.id === product.id ? {...item, quantity: item.quantity + 1} : item
            
            }))
            
        }else{  
            setCartItems([...cartItems, {...product, quantity: 1}])
        }
    }

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id))
    }

    const clearCart = () => {
        setCartItems([]);
    }


    return(
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, itemCount, setItemCount, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}



