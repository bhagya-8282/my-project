import './App.css';
import Nav from './components/nav';
//import Complaint from './components/complaint';
//import ComplaintForm from './components/complaintForm';
import Home from './components/home';
import PageNotFound from './components/pageNotFound';
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Admin from './components/admin';
import Adminform from'./components/adminform';
import Engineer from './components/engineer';
import Engineerform from'./components/engineerform';
import Updateengineer from './components/updateengineer';
import LoginNew from './components/loginnew';
import Loginreact from './components/loginreact';
import Login from './components/login';
import Logout from './components/logout';
import ComplaintsByStatus from './components/complaintsByStatus';
import Products from './components/products';
import Validationform from './components/validation';
import Registration from './components/registration'
import AdminValidationForm from './components/AdminValidationForm';
function App() {
  return (
    <div className="App">
      <Nav/>
      
      <Switch>      
        <Route path='/home' component={Home}/> 
      <Route path='/admin' component={Admin}/>
      <Route path='/getAdmins/add' component={Adminform}/>
      <Route path='/engineer' component={Engineer}/>
      <Route path='/addEngineers' component={Engineerform}/>
      <Route path='/engineers/update/:employeeId' component={Updateengineer}/>
      <Route path='/complaintsByStatus' component={ComplaintsByStatus}/>
      <Route path='/products' component={Products}/>
      <Route path='/registration' component={Registration}/>
      <Route path='/login' component={Login}/> 

      <Route component={PageNotFound} />          
      </Switch>
      
    </div>
  );
}

export default App;