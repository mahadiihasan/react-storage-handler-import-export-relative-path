import React from 'react';
import './cosmetic_item.css';
import {removeFromDatabase, addToDB } from '../../utilities/local_storage_fakeDB';

const Cosmetic_item = (props) => {

    const {id, name, price} = props;

    const addToCart =(id)=>{
        // console.log('item added', id);
        addToDB(id);
    }

    const addToCartWithParam = () => addToCart(id);

    //remove item from cart
    const removeFromCart = id =>{
        removeFromDatabase(id);
    }

    return (
        <div className='cosmetic'>
            <h2>Buy this: {name}</h2>
            <p>Only for: $ {price}</p>   
            <button onClick={addToCartWithParam}>Add to Cart</button>         
            {/* <button onClick={()=>addToCart(id)}>Add to Cart2</button>       */}
            <button onClick={()=>removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic_item;