
// import { Suspense, lazy } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
    // useLocation
  } from "react-router-dom";
  
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/authentication/LoginPage";
import NotFound from "../pages/NotFound"
import NavBar from "../layouts/Navbar";
import RegisterPage from "../pages/authentication/RegisterPage";


const LoginContainer = () => (
  <div className="container">
    <Route exact path="/" render={() => <Redirect to="/login" />} />
    <Route path="/login" component={LoginPage} />
  </div>
)

const RegisterContainer = () => (
  <div className="container">
    <Route exact path="/" render={() => <Redirect to="/register" />} />
    <Route path="/register" component={RegisterPage} />
  </div>
)

const DefaultContainer = () => (
  <div className="container">
    <NavBar/>
    <Route exact path="/" component={LandingPage} />
    <Route component={NotFound} />
  </div>
)

function Routing() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/(login)" component={LoginContainer}/>
            <Route exact path="/(register)" component={RegisterContainer}/>
            <Route component={DefaultContainer}/>
          </Switch>
      </BrowserRouter>
    )
}


export default Routing;