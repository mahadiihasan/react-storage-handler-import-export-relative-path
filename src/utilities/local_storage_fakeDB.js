const addToDB = id => {

    let shoppingCart;   

    // const qty = localStorage.getItem(id);

    //get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    else {
        shoppingCart = {};
    }

    //add quantity
    const qty = shoppingCart[id];
    if (qty) {

        // console.log('already exist');

        // const newQty = parseInt(qty) + 1;
        const newQty = qty + 1;
        shoppingCart[id] = newQty;

    }
    else {
        // localStorage.setItem(id, newQty);
        // console.log('new item')
        // localStorage.setItem(id, 1);
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

//Remove from DB
const removeFromDatabase = id =>{
    // console.log('removing ',id);
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        } 
    }
}

//remove whole shopping cart
// const deleteSoppingCart = () =>{
//     localStorage.removeItem('shopping-cart');
// }



export {addToDB, removeFromDatabase};