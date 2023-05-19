const add = (first, second)=>{
    return first+second;
}

const multiply = (first, second) => {
    return first*second;
}


//array reducer
// const numbers = [100, 200, 250, 350, 20, 80];
// const sumReducer = (previous, current) => previous + current;
// const total = numbers.reduce(sumReducer, 0);

const items = [
    {id: 1, name: 'alta', price: 200},
    {id: 1, name: 'alta', price: 200},
    {id: 1, name: 'alta', price: 200},
    {id: 1, name: 'alta', price: 200},
    {id: 1, name: 'alta', price: 200},
]

// const reducer = (previous, current) => previous + current.price;
// const total = items.reduce(reducer, 0);
// console.log(total);

//get Total Price of the shop
const getTotalPrice = prodcuts =>{
    const reducer = (previous, current) => previous + current.price;
    const total = prodcuts.reduce(reducer, 0);
    // console.log(total)
    return total;
}

// export default add;
export {
    add, 
    multiply, 
    getTotalPrice as getTotal
};