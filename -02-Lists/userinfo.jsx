import React from 'react'

const User = () => {
    
  const  usersInfo = [

        {
            username: 'Charles',
            email: 'test@gmail.com',
            location: 'Accra',
        },

        {
            username: 'Bradley',
            email: 'info@gmail.com',
            location: 'Awoshie',
        },

        {
            username: 'Joseph',
            email: 'say@gmail.com',
            location: 'USA',
        },
    ];

    return (
      /*  <main>
            { usersInfo.map((user =>(
                <ul key={Math.random()}>
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <li>{user.location}</li>
                </ul>
           )))}
        </main>*/

        /* OR THIS OPTIONAL */

        <main>
        { usersInfo.map(({username, email, location})=>(
            <ul key={Math.random()}>
            <li>{username}</li>
            <li>{email}</li>
            <li>{location}</li>
            </ul>
            ))}
        </main>
        
    )
}

export default User ;