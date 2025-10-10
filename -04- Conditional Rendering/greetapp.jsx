import React from 'react'


const GreetingApp = () => {
    return (
        <section>
            <Greeting username = 'Confidence' isLoggedIn = {false}/>
        </section>
    )
};

const Greeting = ({username,isLoggedIn}) => {
    return (
        isLoggedIn === true ? <h1>Welcome {username}</h1> : <h1>Please Log in</h1>
    )
}

export default GreetingApp;