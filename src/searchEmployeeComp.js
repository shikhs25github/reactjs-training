import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class SearchEmployeeComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            empName: '',
            redirect: false
        }
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.setState({
            redirect: true
        })
    }

    render(){
        if (this.state.redirect) {
            return <Redirect to={`/viewEmployee?name=${this.state.empName}`} />
        }
        return(
            <div>
                <h3>{this.props.heading}</h3>
                <form>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Enter Employee Name</label>
                        <div className="col-sm-5">
                            <input type="text" name="empName" className="form-control mx-sm-3" value={this.state.empName} onChange={this.handleInputChange} placeholder="Enter Name"></input>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleOnSubmit}>Submit</button>
                </form>
                <Link to="/home">Home</Link>
            </div>
        );    
    }
    
}

export default SearchEmployeeComp;