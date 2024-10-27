import React ,{useState} from 'react';
import Data from '../Data.json'
import Watches from '../Components/Watches'

function Products() {

    const [products, setProducts] = useState(Data.products);

    return (
        <div className='container1 mt-5'>
        <div className='row row-cols-1 row-cols-md-3 g-4'>
           {
            products.map( p => (
                <Watches watch = {p}/>
            ))
        }
        </div>
        </div>
    )
}

export default Products
