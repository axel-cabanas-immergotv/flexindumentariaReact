import React from "react";

const CartContext = React.createContext();
const {Provider} = CartContext;

const CartProvider = ({children}) => {
    
    const [cart, setCart] = React.useState([])
    const [data, setData] = React.useState()
    console.log(cart)

    const addItem = (item, count, size, setText) => {
        if(isInCart(item.id)) {
            const newCart = cart.map(prod => {
                if(prod.id === item.id) {
                    prod.quantity= prod.quantity + count;
                }
                return prod
            })
            setCart(newCart)
        } else {
            if(size === '') {
                setText('Elija un talle');
            } else {
                setCart([...cart, {...item, quantity: count, size: size}])
                setText('');
            }
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

    const IconLoading = () => {
        return (
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }

    const total = cart.map(item => item.price * item.quantity).reduce((a, b) => a + b, 0);

    return (
        <Provider value={{
            cart,
            setCart,
            addItem,
            isInCart,
            removeItem,
            clear,
            IconLoading,
            data,
            setData,
            total
        }}>
            {children}
        </Provider>
    )
}

export {CartContext, CartProvider};