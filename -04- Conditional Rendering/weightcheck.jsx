import React from 'react'

const WeightCheck = () => {

    const victims = [
        {name: 'Bradley Owuehand', weight: 70},
        {name: 'Charles Dauda', weight: 45},
        {name: 'Nana Obese', weight: 20},
        {name: 'Emmanuel Odame', weight: 50},
        {name: 'Joseph Bonah', weight: 40},
    ]
    return (
        <Weight victims = {victims} />
    )
};

const Weight = ({victims}) => {

    return (
        <section>
            <h1>Weight Check Profile</h1>
            {victims.map(({name, weight}, items) =>(
                <ul key = {items}>
                    <li>Name: {name}</li>
                    <li>Weight: {weight},  {weight < 30 && <p>You are underweight</p>} {weight >= 65 && <p>You are Overweight</p>} {weight >= 40 && weight < 60 && <p>You have a normal weight</p>} </li>
                </ul>
            ))}
        </section>
    );
};

export default WeightCheck;
