import React from 'react';
import './cosmetic_item.css';

const Cosmetic_item = (props) => {

    const {id, name, price} = props;

    const addToCart =(id)=>{
        console.log('item added', id);
    }

    const addToCartWithParam = () => addToCart(id);

    return (
        <div className='cosmetic'>
            <h2>Buy this: {name}</h2>
            <p>Only for: $ {price}</p>   
            <button onClick={addToCartWithParam}>Add to Cart</button>         
            <button onClick={()=>addToCart(id)}>Add to Cart2</button>         
        </div>
    );
};

export default Cosmetic_item;