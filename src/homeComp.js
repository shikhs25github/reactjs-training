import React from 'react';
import { Link } from 'react-router-dom';
import CounterUsingHooksComp from './counterUsingHooksComp';
import EmpDetailsComp from './empDetailsComp';

class HomeComp extends React.Component {
    constructor(props){
        super(props);
        this.empList = [ // Array of Objects
            {id: '1', name: 'Selena', desg: 'SE', profilePic: './images/image1.jpg'},
            {id: '2', name: 'Rihanna', desg: 'SSE', profilePic: './images/image2.jpg'},
            {id: '3', name: 'Enrique', desg: 'TA', profilePic: './images/image3.jpg'},
            {id: '4', name: 'Brett', desg: 'Manager', profilePic: './images/image4.jpg'},
            {id: '5', name: 'Tom', desg: 'DH', profilePic: './images/image5.jpg'},
            {id: '6', name: 'Ben', desg: 'SE', profilePic: './images/image6.jpg'}
        ];
    }

    render(){
        return(
            <div>
                <Link to="/addEmployee">Add Employee</Link>
                <br></br>
                <Link to="/viewAllEmployees">View All Employees</Link>
                <br></br>
                <Link to="/searchEmployee">Search Employee</Link>

                <CounterUsingHooksComp></CounterUsingHooksComp>

                <div className="container">
                    <div className="row">
                        {this.empList.map(emp => <EmpDetailsComp employee={emp} key={emp.id}></EmpDetailsComp>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeComp;