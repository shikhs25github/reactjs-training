import React from 'react';
import { Link } from 'react-router-dom';
import './image.css';

class EmpDetailsComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {flag: true};
    }

    componentDidMount(){
        console.log('component rendered!');
    }

    toggleImage = () => {
        //console.log(`toggleImage() called, current state flag value: ${this.state.flag}`);
        this.setState(prevState => ({
            flag : !prevState.flag
        }));
    }

    /*componentDidUpdate() {
        console.log(`Updated state flag value: ${this.state.flag}`);
    }*/

    render(){
        return(
            <div className="col-sm-4">
                <div className="card">
                    {this.state.flag ? <img className="card-img-top" src={this.props.employee.profilePic} alt=""/> : <span>No Image</span>}
                    <div className="card-body">
                        <div className="card-title">Name: {this.props.employee.name}</div>
                        <div className="card-text">Desgination: {this.props.employee.desg}</div>
                        <div className="card-text">Employee Id: <Link to={`employee/${this.props.employee.id}`}>{this.props.employee.id}</Link></div>
                        <button type="button" className="btn btn-primary" onClick={this.toggleImage}>{this.state.flag ? "Hide" : "Show"}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmpDetailsComp;