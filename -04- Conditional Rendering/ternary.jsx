import React from 'react'


const ValidPassword = () => <h1>Valid Password</h1>;

const InvalidPassword = () => <h1>Invalid Password</h1>;

const Password = ({isValid}) => {

   return  isValid ? <ValidPassword /> : <InvalidPassword />;
};

const MainApp = () =>{
    return (
        <section>
            <Password isValid = {false} /> 
        </section>
    );
};

export default MainApp;