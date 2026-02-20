import React from 'react';
import { SiShopee } from "react-icons/si";
import { AiOutlineLaptop } from "react-icons/ai";
import { FaComputer } from "react-icons/fa6";

const ProductDashboard = () => {

    const details = [
        {name: 'Laptop', price: 4000 , icon: <AiOutlineLaptop />},
        {name: 'Computer', price: 1200, icon: <FaComputer />}
    ];

    return (
         <Product details = {details} />
    );
};

const Product = ({details}) => {
    return (
        <section>
            <h1>Shop With Us<SiShopee /></h1>
            {details.map(({name, price, icon}, item) => (
                <div key = {item}>
                    
                    <p>Product: {name} {icon}</p>
                    <p>Price: ${price}</p>
                </div>
            ))}
        </section>
    )
}

export default ProductDashboard;
