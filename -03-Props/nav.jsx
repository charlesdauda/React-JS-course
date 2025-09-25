import React from 'react';

const NavBar = () => {

  const navLinks = [

    {name:'Home', link: 'Home'},
    {name:'About', link: 'About'},
    {name:'Contact', link: 'Contact Us'},
    {name:'Mission', link: 'Mission'},
  ];

  return (
    <nav>
      { navLinks.map((items,index)=>(
        <ul>
          <li key={index}>
            <a href={items.name}>{items.link}</a>
          </li>
        </ul>
      ))}
    </nav>
  )
  
}

export default NavBar ;
