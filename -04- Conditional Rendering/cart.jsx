import React from 'react'


const Cart = () => {
    
    const items = ['Wireless Earbud', 'Laptop', 'Microphone','Floppy Disc', 'Trumpet'];

    return (
        <section>
            <h1>Cart</h1>
            {items.length > 0 && <h2>You have {items.length} items in your Cart</h2>}

            <ul>
                {items.map((item => (
                    <li key={Math.random}>{item}</li>
                )))}
            </ul>
        </section>
    );
};

const CartApp = () => {
    return (
        <Cart />
    );
};

export default CartApp;