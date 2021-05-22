import React from 'react';
import { Link } from 'react-router-dom';

class ViewAllEmployeesComp extends React.Component{
    constructor(props){
        super(props);
        this.allEmp = ['Selena Gomez', 'Rihanna', 'Enrique Iglesias', 'Brett Lee', 'Tom Cruise', 'Benedict Cumberbatch']
    }

    render(){
        return(
            <div>
                <h3>List of all the employees:</h3>
                <ul className="list-group">
                    {this.allEmp.map(e => <li className="list-group-item">{e}</li>)}
                </ul>
                <Link to="/home">Home</Link>
            </div>
        )
    }
}

export default ViewAllEmployeesComp;