import React, { useContext } from 'react';
import { CartContext } from '../Features/ContextProvider';
import Cartproduct from '../Components/Cartproduct';
import { totalItem, totalPrice } from '../Features/CartReducer';


function Cart() {
    const { cart } = useContext(CartContext);

    return (
        <div className='container2 mt-4'>
            <div className="row">
                <div className="col-8">
                    {cart.length > 0 ? (
                        cart.map(w => (
                            <Cartproduct key={w.id} watch={w} />
                        ))
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                </div>
                <div className="col-4">
                   <div className="bg-secondary p-2 text-white mt-4">
                    <h5>Total Items: {totalItem(cart)}</h5>
                    <h5>Total Price: {totalPrice(cart)}</h5>
                    <button className='btn btn-warning'>Checkout</button>

                   </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;

