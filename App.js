import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import Login from "./Login";


import Profile from './Profile'



export default function App() {

  return (
    <div>
      <h1>Welcome to Kid page</h1>
   

    <Router>
        <Switch>
          <Route exact path="/login" component={Login}>
         
          </Route>
          <Route exact path="/profile" component={Profile}>
           
          </Route>
         
        
        </Switch>
      
    </Router>
    </div>
  );
}