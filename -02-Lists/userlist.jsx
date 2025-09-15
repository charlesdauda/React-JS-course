import React from 'react';

const UserList = () => {

    const users = [
        {id: 1, name: 'Alice', age: 18},
        {id: 2, name: 'Agnes', age: 16},
        {id: 3, name: 'Bossman', age: 20}
    ]

    return (
        <div>
            {users.map((user => (
                <div key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Age: {user.age}</p>
                </div>
            )))}
        </div>
    )
}

export default UserList ;