import React from 'react'

const AccessPanel = () => {
    return (
        <Access  isLoggedIn = {false} hasPermission = {true}/>
    )
}

const Access = ({isLoggedIn, hasPermission}) => {
    return (
        <section>
            {!isLoggedIn&& <h1>Please log in to continue</h1>}
            {isLoggedIn && !hasPermission && <h1>Access Denied.</h1>}
            {isLoggedIn && hasPermission && <h1>Welcome to the control panel</h1>}
        </section>
    )
}

export default AccessPanel; 