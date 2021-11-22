import './App.css';
import Nav from './components/nav';
//import Complaint from './components/complaint';
//import ComplaintForm from './components/complaintForm';
import Home from './components/home';
import PageNotFound from './components/pageNotFound';
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Admin from './components/admin';
import Engineer from'./components/engineer';
import Engineerget from './components/engineerget';
function App() {
  return (
    <div className="App">
      <Nav/>
      
      <Switch>
        
        {/* <Route path="/complaintForm" component={ComplaintForm}/> */}
        <Route path='/admin' component={Admin}/>
        <Route path='/engineer' component={Engineer}/>
        <Route path='/engineerget' component={Engineerget}/>

       { /*<Route path='/complaints/add' component={ComplaintForm}/>*/}
        <Route exact path="/" component={Home} />
        <Redirect from="/home" to="/" />
        <Route component={PageNotFound} />
      </Switch>
      
    </div>
  );
}

export default App;