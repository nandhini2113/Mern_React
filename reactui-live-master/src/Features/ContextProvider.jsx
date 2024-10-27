import React, {Children, createContext, useReducer} from 'react';
import CartReducer from './CartReducer';

export const CartContext = createContext();

function ContextProvider({children}) {
    const [cart,dispatch] = useReducer(CartReducer,[])

    return (
        <div>
            <CartContext.Provider value={{cart,dispatch}}>
                {children}
            </CartContext.Provider>
        </div>
    )
}

export default ContextProvider
