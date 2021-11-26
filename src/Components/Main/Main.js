import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Data from '../Data/Data';

const Main = () => {
    const [emploees, setEmploees] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setEmploees(data));
    }, []);

    const handleAddCart = (emploee) => {
        // console.log(emploee,cart);
        const newCart = [...cart, emploee];
        // console.log(newCart);
        setCart(newCart);
    }

    return (
        <div className="container-fluid row">
            <div className="col-8 d-flex flex-wrap ">
                {
                    emploees.map((emploee) => <Data handleAddCart={handleAddCart} key={emploee.key} emploee={emploee}></Data>)
                }
            </div>
            <div className="col-4">
                <Cart key={cart.key} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;