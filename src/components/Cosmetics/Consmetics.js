import React from 'react';
import {add, multiply } from '../../utilities/calculate';

const Consmetics = () => {
    const first = 55;
    const second= 65;
    const total = add(first, second);
    const multi = multiply(first, second);
    return (
        <div>
            <h2>This is cosmetics component</h2>
            <p>Price : {total}</p>
            <p>Multiply: {multi}</p>
        </div>
    );
};

export default Consmetics;