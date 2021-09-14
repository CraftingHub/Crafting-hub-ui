
import { Suspense, lazy } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
    useLocation
  } from "react-router-dom";
import { Spinner } from "@chakra-ui/react"
import NavBar from "../layouts/Navbar";
import Footer from '../components/home/Footer';


const Loadable = (Component: any) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  // eslint-disable-next-line 
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <Spinner
          thickness="4px"
          speed="4s"
          emptyColor="gray.200"
          color="orange.500"
          size="xl"
          sx={{
            top: 0,
            left: 0,
            width: 1,
            zIndex: 9999,
            position: 'fixed'
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};


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
    <Footer/>
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

const LandingPage = Loadable(lazy(() => import("../pages/LandingPage")));
const LoginPage = Loadable(lazy(() => import("../pages/authentication/LoginPage")));
const RegisterPage = Loadable(lazy(() => import("../pages/authentication/RegisterPage")));
const NotFound = Loadable(lazy(() => import("../pages/NotFound")));
