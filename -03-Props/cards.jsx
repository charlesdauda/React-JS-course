import React from 'react';


const Try = () => {
    return (
        <div>
            <Card>
            <h3>Card 1</h3>
            <p>This is some content for Card 1</p>
            </Card>
        </div>
    )
}


const Card = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Try;