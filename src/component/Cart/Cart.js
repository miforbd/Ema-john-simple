import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
             <h2>Product summary</h2>
            <p>Selected item: {cart.length}</p>
        </div>
    );
};

export default Cart;