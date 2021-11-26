import React from 'react';
import Cart2 from '../Cart2/Cart-2';

const Cart = (props) => {
    // console.log(props.cart);
    const { cart } = props;


    let total = 0;
    for (const singleCart of cart) {
        total = total + parseInt(singleCart.demand);
    }
    
    // let name=[];
    // for(const nameCart of cart){
    //     name.push(nameCart.name);
    // }
    // console.log(total);
    return (
        <div className='bg-primary rounded-3 p-3 text-white'>
            <h1>Total added worker: {props.cart.length}</h1>
            <h1>Total cost: {total} </h1>
            <Cart2 cart={props.cart}></Cart2>
        </div>
    );
};

export default Cart;