import React from 'react'

const ProductList = () => {
     
    const products = [
        {id: 1, name: 'Phone', price: '$899'},
        {id: 2, name: 'Laptop', price: '$188'},
        {id: 3, name: 'Headphones', price: '$500'}
    ]

    return (
        <div>
            {products.map(( product => (
                <div key={product.id}>
                    <p>Name:{product.name}</p>
                    <p>Price:{product.price}</p>
                </div>
            )))}
        </div>
    )
}

export default ProductList;