import React from "react";

const Try = () => {

    const Items = [
        {id: 1, name: 'Charles', school: 'UPSA'},
        {id: 2, name: 'Awuni', school: 'UMAT'},
        {id: 3, name: 'Marcus', school: 'UG'},
    ];

    return (
        <div>
            { Items.map((i => (
                <ul key={i.id}>
                    <li>Name: {i.name}</li>
                    <li>School: {i.school}</li>
                </ul>
            )))}
        </div>
    )
}

export default Try;