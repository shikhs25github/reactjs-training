import React from 'react';
import { Link } from 'react-router-dom';

class AddEmployeeComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {eid: '', ename: '', edesg: ''};
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        alert(`Employee added: Id = ${this.state.eid}, Name = ${this.state.ename}, Designation = ${this.state.edesg}`);
    }

    render(){
        return(
            <div>
                <form>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Employee Id</label>
                        <div className="col-sm-5">
                            <input type="text" name="eid" className="form-control mx-sm-3" value={this.state.eid} onChange={this.handleOnChange} placeholder="Enter Id"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Employee Name</label>
                        <div className="col-sm-5">
                            <input type="text" name="ename" className="form-control mx-sm-3" value={this.state.ename} onChange={this.handleOnChange} placeholder="Enter Name"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Employee Designation</label>
                        <div className="col-sm-5">
                            <input type="text" name="edesg" className="form-control mx-sm-3" value={this.state.edesg} onChange={this.handleOnChange} placeholder="Enter Designation"></input>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleOnSubmit}>Submit</button>
                </form>
                <Link to="/home">Home</Link>
            </div>
        )
    }
}

export default AddEmployeeComp;