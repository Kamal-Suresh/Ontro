import OntroDashboard from "./OntroDashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";







function StartingPage() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Login}></Route>
          <Route path="/home" component={OntroDashboard}></Route>
        </Router>
        
      </div>
    );
}

export default StartingPage
