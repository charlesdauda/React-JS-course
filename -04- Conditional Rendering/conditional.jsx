import React from 'react';

const ValidPassword = () => <h1>Valid Password</h1>
const InvalidPassword = () => <h1>Invalid Password</h1>


const Password = ({isvalid}) => {
    if(isvalid){
        return <ValidPassword />
    }

    return <InvalidPassword />
}

const PassApp = () => {

    return (
        <section>
            <Password isValid = {true}/>
        </section>
    )
};

export default PassApp;
