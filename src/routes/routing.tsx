import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";
  
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/authentication/LoginPage";
import NotFound from "../pages/NotFound"


function Routing() {
    return (
      <BrowserRouter>
          <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/login" component={LoginPage} />
              <Route component={NotFound} />
          </Switch>
      </BrowserRouter>
    )
}

export default Routing;