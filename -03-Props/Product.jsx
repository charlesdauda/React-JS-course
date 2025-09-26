import React from 'react';

const ProductDB = () =>{
    return (
        <Product
        name = 'Lenovo IdeaPad'
        price = {300} 
        />
    )
}

const Product = ({name,price}) => {
    return (
        <section>
            <h1>Name: {name}</h1>
            <p>Price: ${price}</p>
        </section>
    )
}

export default ProductDB;