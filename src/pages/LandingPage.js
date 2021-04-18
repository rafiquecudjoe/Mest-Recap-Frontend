import Button from "../components/Button"
import { useAppContext } from "../Appcontext"
import Login from "./Login/Login"
import Signup from "./Signup/Signup"
import {useHistory} from "react-router-dom"

const Landing = () => {

    const history = useHistory();
 
    const { state,dispatch } = useAppContext();
    console.log(state)


    const showsignin = () => {
        dispatch({type:'showsignin'})
    }
    
    
    
const showsignup = () => {
          history.push('/signup')
      }
    


    return (
        <div className="landing">
            <Button onClick={showsignin} text="login" />
            <Button onClick={showsignup }text="Signup" />
            {state.showsignin && <Login />}
            {state.showsignup && <Signup />}

        </div>
    )
}




export default Landing;