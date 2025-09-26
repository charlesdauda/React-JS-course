import React from 'react'


const ProfileDB = () => {

    return(
        <Profile
        name = 'Kwame'
        age = {30}
        school = 'UPSA'
        job = 'Software Engineer' 
        />
    );
}

const Profile = (props) => {
    return (
        <section>
            <h3>Welcome, {props.name}</h3>
            <p>You are {props.age} years old</p>
            <p>You attended {props.school}</p>
            <p>You are a {props.job}</p>
        </section>
    )
}

export default ProfileDB;