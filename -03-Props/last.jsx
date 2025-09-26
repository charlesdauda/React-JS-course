import React from 'react'


const LastDB = () => {

    return (
        <Last>
            <h1>Card 2</h1>
            <p>This is a card component</p>
        </Last>
    )
}

const Last = (props) => {

    return (
        <section>
            {props.children}
        </section>
    )
}

export default LastDB;