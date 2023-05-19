import React from 'react';
import { add, getTotal, multiply } from '../../utilities/calculate';
import Cosmetic_item from '../Cosmetic_item/Cosmetic_item';

const Consmetics = () => {
    // const first = 55;
    // const second= 65;
    // const total = add(first, second);
    // const multi = multiply(first, second);


    const cosmetics = [
        {id: 1, name: 'alta', price: 100},
        {id: 2, name: 'lipstick', price: 200},
        {id: 3, name: 'powder', price: 250},
        {id: 4, name: 'kajol', price: 500},
        {id: 5, name: 'olive oil', price: 1230},
    ]

    //get Total price of the shop
    const total = getTotal(cosmetics);

    return (
        <div>
            <h1>Welcome to my Cosmetics Shop</h1>
            <p>Price : {total}</p>
            {/* <p>Price : {total}</p>
            <p>Multiply: {multi}</p> */}
            {
                cosmetics.map(cosmetic_item => <Cosmetic_item key={cosmetic_item.id} id={cosmetic_item.id} name={cosmetic_item.name} price={cosmetic_item.price}></Cosmetic_item>)
            }
        </div>
    );
};

export default Consmetics;