import React from 'react';

const Greet = () => {
  return (
    <Greeting timeOfDay='Morning' />
  );
};

const Greeting = (props) => {
  return props.timeOfDay === 'Morning'
    ? <h1>Good Morning!</h1>
    : <h1>Good Afternoon!</h1>;
};

export default Greet;
