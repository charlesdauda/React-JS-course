import React from 'react';
import { CiBeerMugFull, CiWarning } from "react-icons/ci";
import { CgUnavailable } from "react-icons/cg";

const BeerSmart = () => {
  const drinks = [
    { name: 'Fanta', percentage: 0, price: 5, availability: true },
    { name: 'Adonko', percentage: 5, price: 20, availability: true },
    { name: 'Origin', percentage: 18, price: 25, availability: false },
    { name: 'Vody', percentage: 17, price: 17, availability: true },
    { name: 'Joy Daddy', percentage: 23, price: 30, availability: false }
  ];

  return (
    <section>
      <h1>Welcome To Smart Buy <CiBeerMugFull /></h1>
      <p>Drink Responsibly </p>

      {drinks.map((drink) => (
        <DrinkCard key={drink.name} name={drink.name} percentage={drink.percentage} price={drink.price} availability={drink.availability} />
      ))}
    </section>
  );
};

const DrinkCard = ({ name, percentage, price, availability }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Alcohol Percentage: {percentage}%</p>
      <p>Price: ${price}</p>
      {percentage >= 15 && (<p> Warning!! Alcohol Content is High <CiWarning /></p>)}
      {!availability && (<p>Out of Stock <CgUnavailable /></p>
      )}
    </div>
  );
};

export default BeerSmart;

