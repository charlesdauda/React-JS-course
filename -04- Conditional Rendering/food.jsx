import React from 'react'

const HealthyBites = () =>{
    const Menu = [
        {name: 'Banku', calories: 200, price: 50, availabilty: true},
        {name: 'Fried Rice', calories: 600, price: 150, availabilty: true},
        {name: 'Tuo Zaafi', calories: 400, price: 70, availabilty: false},
        {name: 'Loaded Fries', calories: 750, price: 170, availabilty: true},
        {name: 'Burger', calories: 900, price: 90, availabilty: false}

    ];
    return (
        <section>
            <h1>Welcome To HealthyBites</h1>
            {Menu.map((menu =>(
                <MenuCard  key={menu.name} name={menu.name} calories={menu.calories} price={menu.price} availability={menu.availabilty} />
            )))}
        </section>
    );
};


const MenuCard = ({name,calories,price,availability}) => {
    return (
        <section>
            <h3>{name}</h3>
            <p>${price}</p>
            {calories > 200 && (<p>High Calorie</p>)}
            {!availability && (<p>Out of Stock</p>)}
        </section>
    );
};

export default HealthyBites;