import React from 'react';


const StudentDirctoryApp = () => {
    return (
        <StudentData
        name = 'Isaac'
        program = 'Bsc In Marketing'
        year = {400}
        />
    );
};



const StudentData = ({name,program,year}) =>{
    return (
        <section>
            <h1>Student Directory App</h1>
            <p>Welcome, {name}</p>
            <p>You offer, {program}</p>
            <p>You are a level {year}</p>
        </section>
    );
};

export default StudentDirctoryApp;