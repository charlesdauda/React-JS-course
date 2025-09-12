import React from 'react';

const ProductInfo = () => {

    const product = {
        name: 'Laptop',
        price: 1300,
        availability : 'in stock'
    }

    return (
        <div>
            <h1>Product Info</h1>
            <p>Name: {product.name}</p>
            <p>Price: ${product.price}</p>
            <p>availability: {product.availability}</p>
        </div>
    )

}

export default ProductInfo ;