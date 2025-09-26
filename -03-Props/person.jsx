import React from 'react';


const PersonDB = () => {
    return (
        <Person 
        name = 'Abigail'
        age = {19} />
    )
}

const Person = ({name,age}) => {
    return (
        <section>
            <h1>Your Name: {name}</h1>
            <p>Age: {age}</p>
        </section>
    )
}

export default PersonDB;