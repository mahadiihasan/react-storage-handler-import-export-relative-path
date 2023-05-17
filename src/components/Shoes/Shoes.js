import React from 'react';
import { multiply } from '../../utilities/calculate';

const Shoes = () => {
    const total = multiply(55, 65);
    return (
        <div>
            <h2>This is Shoes component</h2>
            <p>Multiply from Shoes Component: {total}</p>
        </div>
    );
};

export default Shoes;