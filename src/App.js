import './App.css';
import {Redirect, Route, Switch } from 'react-router-dom';
import HeaderComp from './headerComp';
import ClockComp from './clockComp';
import HomeComp from './homeComp';
import AddEmployeeComp from './addEmployeeComp';
import ViewAllEmployeesComp from './viewAllEmployeesComp';
import FooterComp from './footerComp';
import GetEmployeeComp from './getEmployeeComp';
import SearchEmployeeComp from './searchEmployeeComp';
import ViewEmployeeComp from './viewEmployeeComp';


function App() {
  /*let name = 'Shikha'; // Variable
  let emp = ['Shikha', 'Dolly', 'Vertika', 'Soumya']; // Array
  let empDetails = { // Object
    name: 'Shikha', city: 'Pune'
  }
  //Function
  /*function getSal(emp){
    if(emp === 'Shikha')
      return '1000';
    return '500';
  }*/

  return (
    <div className="App">
      <HeaderComp msg="Welcome to Employee Management System"></HeaderComp>
      <ClockComp></ClockComp>

      <Switch>
      <Route path="/home" component={HomeComp}></Route>
        <Route path="/addEmployee" component={AddEmployeeComp}></Route>
        <Route path="/viewAllEmployees" component={ViewAllEmployeesComp}></Route>
        <Route path="/employee/:eid" component={GetEmployeeComp}></Route>
        <Route path="/searchEmployee" render={props => <SearchEmployeeComp heading="Search Eployee By Name" />}></Route>
        <Route path="/viewEmployee" component={ViewEmployeeComp}></Route>
        <Route path="/"><Redirect to="/home" /></Route>
      </Switch>

      <FooterComp contact="55555555"></FooterComp>

      {/* <h2> Welcome to Emp-MIS, {name} </h2>
      <p>Array: {emp[2]}</p>
      <p>Object: {empDetails.city}</p>
      <p>Function: {getSal('Dolly')}</p>
      <p>Complete Array: {emp.map(e => <li>{e}</li>)}</p> */}

    </div>
  );
}

export default App;