import React, { useContext } from 'react';
import { CartContext } from '../Features/ContextProvider';

const  Watches= ({watch}) =>{

    const {dispatch} = useContext(CartContext);

    return (
        <div className='col'>
            <div class="card h-100">
                    <img src={watch.img} class="card-img-top h-75" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{watch.title}</h5>
                        <p class="card-text">${watch.price}</p>
                        <p class="card-text">{watch.Website}</p>
                        <p class="card-text">{watch.shipping}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><button class="btn1" onClick={()=>dispatch({type:"Add",watch:watch})}>Add to cart</button></li>
                    </ul>
                </div>
        </div>
    );
};

export default Watches;
