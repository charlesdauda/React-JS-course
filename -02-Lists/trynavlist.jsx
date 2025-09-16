import React from "react";

const NavList = () => {

    const NavItems = [
        {name: 'Home', link: 'Home'},
        {name: 'About', link: 'About'},
        {name: 'Contact', link: 'Contact'}
    ];

    return (
        <nav>
            <ul>
                { NavItems.map((item, index) =>(
                    <li key={index}>
                    <a href={item.link}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavList;
