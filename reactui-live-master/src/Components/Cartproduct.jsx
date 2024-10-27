import React, { useContext } from 'react';
import { CartContext } from '../Features/ContextProvider';

function Cartproduct({ watch }) {
    const { cart, dispatch } = useContext(CartContext);

    const Increase = (id) => {
        const index = cart.findIndex(w => w.id === id);
        if (index !== -1 && cart[index].amount < 10) {
            dispatch({ type: "Increase", id });
        }
    };

    const Decrease = (id) => {
        const index = cart.findIndex(w => w.id === id);
        if (index !== -1 && cart[index].amount > 1) {
            dispatch({ type: "Decrease", id });
        }
    };

    return (
        <div className="d-flex border mt-3">
            <img src={watch.img} alt='' className='w-25 h-25' />
            <div className="detail ms-4">
                <h4>{watch.title}</h4>
                <h5>${watch.price}</h5>
                <div className="button-cart">
                    <button className='increase' onClick={() => Decrease(watch.id)}><b>-</b></button>
                    <button className='number'><b>{watch.amount}</b></button>
                    <button className='decrease' onClick={() => Increase(watch.id)}><b>+</b></button>
                </div>
                <button className='remove' onClick={()=>dispatch({type:"Remove",id:watch.id})}>remove</button>
            </div>
        </div>
    );
}

export default Cartproduct;

