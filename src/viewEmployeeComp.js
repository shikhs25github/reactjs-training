import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import './employeeImage.css';

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

function ViewEmployeeComp() {
    const empList = [
        {id: '1', name: 'Selena', desg: 'SE', profilePic: './images/image1.jpg', bio: 'I love singing!'},
        {id: '2', name: 'Rihanna', desg: 'SSE', profilePic: './images/image2.jpg', bio: 'I love singing!'},
        {id: '3', name: 'Enrique', desg: 'TA', profilePic: './images/image3.jpg', bio: 'I love singing!'},
        {id: '4', name: 'Brett', desg: 'Manager', profilePic: './images/image4.jpg', bio: 'I love playing cricket!'},
        {id: '5', name: 'Tom', desg: 'DH', profilePic: './images/image5.jpg', bio: 'I love acting!'},
        {id: '6', name: 'Ben', desg: 'SE', profilePic: './images/image6.jpg', bio: 'I love acting!'}
    ];
    const query = useQuery(); // Using class component: this.props.location.search
    const empName = query.get("name");
    let employee = empList.filter(e => e.name === empName); // returns array
    let emp = employee[0];

    return(
        <div>
            <p><b>Id:</b> {emp.id}</p>
            <p><b>Name:</b> {emp.name}</p>
            <p><b>Designation:</b> {emp.desg}</p>
            <p><b>About:</b> {emp.bio}</p>
            <div>
                <p><b>Profile pic:</b> </p>
                <img src={emp.profilePic} alt=""></img>
            </div>
            <Link to="/home">Home</Link>
        </div>
    );
}

export default ViewEmployeeComp;