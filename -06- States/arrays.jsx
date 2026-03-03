import { useState } from "react";

const Arrays = () => {

    const [friends, setFriends] = useState(["Charles", "Larry"]);

    const addOneFriend = () => setFriends ([...friends, "Bradley"]) //add another person
    const removeFriend = () => setFriends(friends.filter((f) => f !== "Larry")) //removing a friend

    const updateOneFriend = () => {
        setFriends(friends.map(f => f === 'Charles' ? 'Charles Dauda' : f)) //updating a friend
    }
    
    return (

        <section>
            {friends.map(f => (
                <ul key={Math.random()}>
                <li>{f}</li>
                </ul>
            ))}

            <button onClick={addOneFriend}>Add One Friend</button>
            <button onClick={removeFriend}>Remove One Friend</button>
            <button onClick={updateOneFriend}>Update One Friend</button>
        </section>
    );
};

export default Arrays;