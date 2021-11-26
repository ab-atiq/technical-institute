import React from 'react';

const Cart2 = (props) => {
    // console.log(props.cart);
    const { cart } = props;

    // let name = [];
    // for (const singleName of cart) {
    //     name.push(singleName.name);
    // }
    // console.log(name);

    return (
        <div>
            {/* <h1>Name:{name}</h1> */}
            {/* <Name name={name}></Name> */}
            <h1 className='text-danger bg-white my-3 p-3 rounded'>List Cart Name</h1>
            {
                cart.map((name)=><Name key={name.key} name={name.name}></Name>)
            }
        </div>
    );
};

function Name(props){
    return(
        <h3 className='bg-danger py-3 rounded'>Name: {props.name} </h3>
    )
}

export default Cart2;