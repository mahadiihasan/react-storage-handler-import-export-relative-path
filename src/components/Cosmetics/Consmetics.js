import React from 'react';
import { add, multiply } from '../../utilities/calculate';
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
    return (
        <div>
            <h2>This is cosmetics component</h2>
            {/* <p>Price : {total}</p>
            <p>Multiply: {multi}</p> */}
            {
                cosmetics.map(cosmetic_item => <Cosmetic_item key={cosmetic_item.id} id={cosmetic_item.id} name={cosmetic_item.name} price={cosmetic_item.price}></Cosmetic_item>)
            }
        </div>
    );
};

export default Consmetics;