import React from 'react';

const AgeDisplay = () => {

     const people = [
        { name: "Alice", age: 10 },
        { name: "Bob", age: 16 },
        { name: "Charlie", age: 25 }
]
    return (
        <section>
            <Age people = {people} />
        </section>
    )

};

const Age = ({people}) => {

    return (
        <section>
            {people.map(({name, age,}, item) =>(
                <ul key = {item}>
                    <li>Name: {name}</li>
                   <li> Age: {age}, {age < 13 ? "Child" : age <= 19 ? "Teenager" : "Adult"}</li>
                </ul>
            ))}
        </section>
    )
}

export default AgeDisplay;
