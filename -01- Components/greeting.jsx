import React from 'react'

const Greet = () => {

    const greet = 'hello';
    const date = new Date()

    return (
        <>
        <h1>{greet}</h1>
        <p>Date : {date.getDate()}</p>
        </>
    );
};

export default Greet ;