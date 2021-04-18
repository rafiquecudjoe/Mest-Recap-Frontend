import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [values, setValues] = useState({});

  const onchange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const history = useHistory();

  const gotosignup = (e) => {
    e.preventDefault();
    history.push("/signup");
  };

  const Submit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form>
      <h1>Login</h1>
      <InputField
        label="Email"
        type="email"
        placeholder="Jojo@gmail.com"
        name="email"
        onchange={onchange}
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        onchange={onchange}
        placeholder="password"
      />
      <div>
        <Button text="Login" onClick={Submit} />
        <Button text="Signup" onClick={gotosignup} />
      </div>
    </form>
  );
}

export default Login;
