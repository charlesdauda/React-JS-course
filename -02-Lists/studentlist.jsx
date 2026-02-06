import React from 'react';

const Studentlist = () => {

    const students = [
        { id: 1, name: "James", grade: "A" },
        { id: 2, name: "Bradley", grade: "B" },
        { id: 3, name: "Joseph", grade: "D" },
        { id: 4, name: "Harry", grade: "A" }
    ];

    return (
        <section>
            {students.map(({id, name,grade})=>(
                <div key={id}>
                    <p>Name: {name}</p>
                    <p>Grade: {grade}</p>
                </div>
            ))}
        </section>
    );
};

export default Studentlist;