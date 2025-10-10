import React from 'react';


const StudentDashboard = () => {
    const Studentlist = [
        {
            id: 1,
            name: 'Nana Kay',
            grade: 80
        }
    ];
    return (
        <section>
            {Studentlist.map((student =>(
                <Student key={student.id} name={student.name} grade={student.grade}/>
            )))}
        </section>
    )
};

const Student = ({name,grade}) => {
    return (
        <section>
            <h1>{name}'s Dashboard</h1>
            {grade >= 65 ? <p>You have passed</p> : <p>You have Failed</p>}
        </section>
    )
}

export default StudentDashboard;