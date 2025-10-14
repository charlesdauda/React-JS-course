import React from 'react';
import { VscTools } from "react-icons/vsc";
import { FaLaptopCode } from "react-icons/fa";
import { PiMouseMiddleClickDuotone } from "react-icons/pi";
import { RiMacbookLine } from "react-icons/ri";
import { BsSdCardFill } from "react-icons/bs";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { RiSpeakerLine } from "react-icons/ri";

const TechStore = () => {
    const gadgets = [
        {name: 'Laptop', price: 2500, inStock: true, discount: true},
        {name: 'Mouse', price: 20, inStock: true, discount: false},
        {name: 'iMac', price: 3400, inStock: false, discount: true},
        {name: 'SSD', price: 150, inStock: true, discount: true},
        {name: 'Phone', price: 200, inStock: true, discount: true},
        {name: 'Speaker', price: 500, inStock: false, discount: false}
    ];
    return (
        <section>
            <h1>Tech Store <VscTools/></h1>
            {gadgets.map((item =>(
                <GadgetCard key={item.name} name={item.name} price={item.price} inStock={item.inStock} discount={item.discount}/>
            )))}
        </section>
    );
};

const GadgetCard = ({name,price,inStock,discount}) => {
    let icon;
    if(name === 'Laptop') icon = <FaLaptopCode /> 
    else if(name === 'Mouse') icon = <PiMouseMiddleClickDuotone />
    else if(name === 'iMac')  icon = <RiMacbookLine />
    else if(name === 'SSD') icon = <BsSdCardFill />
    else if(name === 'Phone') icon = <IoPhonePortraitOutline />
    else if(name == 'Speaker') icon = <RiSpeakerLine />
    return (
        <section>
            <h4>{name}{icon}</h4>
            <p>${price}</p>
            {discount && (<p>Discount Available!</p>)}
            {!discount && (<p>No Discount</p>)}
            {!inStock && (<p>Out of Stock</p>)}
            {price > 1000 && (<p>Premium Gadget</p>)}
        </section>
    );
};

export default TechStore;