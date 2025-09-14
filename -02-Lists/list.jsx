import React from 'react'


const Num = () => {
    const number = [1,2,3,4,5,6];

    return (
        <main>
            {number.map((number) =>(
                <ul key={number}>
                    <li>{number}</li>
                </ul>
            ))}
        </main>
    )
};

export default Num ;
