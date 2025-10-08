import React from 'react'

const LoginMessage = () =>{
    return (
        <Auth isLoggedIn = {false} />   
    )
}

const Auth = ({isLoggedIn}) => {
    return isLoggedIn === true  ? (<h1>Welcome Back</h1>) : (<h1>Please Log in</h1>);
};

export default LoginMessage;
