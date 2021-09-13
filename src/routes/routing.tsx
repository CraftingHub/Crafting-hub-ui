import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";
  
import LandingPage from "../pages/LandingPage";
import NotFound from "../pages/NotFound"


function Routing() {
    return (
      <BrowserRouter>
          <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route component={NotFound} />
          </Switch>
      </BrowserRouter>
    )
}

export default Routing;