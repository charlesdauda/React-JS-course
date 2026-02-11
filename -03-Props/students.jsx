import React from 'react';

const StudentData = () => {

     const data = [
            {
                id: 1,
                name: 'Charles Alhassan Dauda',
                level: 300,
                program: 'Bsc Information Tech'
            }
        ]

    return (
        <Student data = {data}/>
    )
}

const Student = ({data}) => {

    return (
        <section>
            {data.map(({id,name,level,program,})=>(
                <div key={id}>
                    <p>Your name is: {name}</p>
                    <p>Level: {level}</p>
                    <p>Program of Study: {program}</p>
                </div>
            ))}
        </section>
    );
};

export default StudentData;
