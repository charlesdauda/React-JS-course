import React from 'react';
import { AiFillDashboard } from "react-icons/ai";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";


const EmployeePerformance = () => {
    const employee = [
    { name: "Charles", performance: 95 },
    { name: "Sarah", performance: 67 },
    {name: "Emmanuel", performance: 45 },
    { name: "Grace", performance: 82 }
    ];
    
    return (
        <section>
            <h1>Employee DashBoard<AiFillDashboard/></h1>
            {employee.map(work =>(
                <Dashboard key={work.name} name={work.name} performance={work.performance} />
            ))}
        </section>
    );
};

const Dashboard = ({name,performance}) =>{
    let icon;
    if(name === 'Charles')icon = <FaMale />
    else if (name === 'Sarah')icon = <FaFemale />
    else if(name === 'Emmanuel') icon =<FaMale />
    else if(name === 'Grace') icon = <FaFemale />
    return (
        <section>
            <h4>{name} {icon}</h4>
            <h5>Performance: {performance}</h5>
            {performance >= 80 ? (<p>Excellent Job</p>) : performance >= 50 ? (<p>Average</p>) : (<p>Needs Improvement</p>)}
        </section>
    );
};

export default EmployeePerformance;