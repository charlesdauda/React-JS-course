import React from 'react';

const App = () => {
    return (
    <User  
    name =  'Charles'
    img = 'https://images.unsplash.com/photo-1741514230333-d6a6a89c4a40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    age = {21}
    isMarried = {false}
    hobbies = {["coding","gaming","reading","walking"]} />
    );
};

const User = (props) =>{
    return(
        <section>
           <h1>Name: {props.name}</h1>
           <h2>Age: {props.age}</h2>
           <h3>Is Married: {props.isMarried}</h3>
           <h4>Hobbies: {props.hobbies}</h4>
           <img src={props.img} alt={props.name} width={200}/>
        </section>
    )
}

export default App;