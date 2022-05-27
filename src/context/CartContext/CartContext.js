import React from "react";

const CartContext = React.createContext();
const {Provider} = CartContext;

const CartProvider = ({children}) => {
    
    const [cart, setCart] = React.useState([])
    console.log(cart)

    const addItem = (item, count) => {
        if(isInCart(item.id)) {
            const newCart = cart.map(prod => {
                if(prod.id === item.id) {
                    prod.quantity= prod.quantity + count;
                }
                return prod
            })
            setCart(newCart)
        } else {
            setCart([...cart, {...item, quantity: count}]) ;
        }

    }

    const removeItem = (itemId) => {
        const newCart = cart.filter(prod => prod.id !== itemId)
        setCart(newCart)
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.find(item => item.id === id)
    }

    return (
        <Provider value={{
            cart,
            addItem,
            isInCart,
            removeItem
        }}>
            {children}
        </Provider>
    )
}

export {CartContext, CartProvider};