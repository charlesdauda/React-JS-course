import React from 'react'

const Expressions = () => {

    const myname = 'Charles';
    const multiply = (a , b) => (a * b);
    const specialcase = 'anything I want';

    return (
        <div>
            <h4>JSX EXPRESSIONS</h4>
            <p>My name is {myname}</p>
            <p>2*2 = {multiply(2 , 2)}</p>
            <p className={specialcase}>Sweet Things</p>
        </div>
    );
};

export default Expressions ;