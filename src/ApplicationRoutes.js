import { Switch, Route } from "react-router-dom"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import LandingPage from "./pages/LandingPage"
import Navbar from "./Navbar"



const ApplicationRoutes = () => {

    return (

    
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login"  component={Login} />
        </Switch>
        
    )
}


export default ApplicationRoutes;