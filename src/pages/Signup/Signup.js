import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function Signup() {
  let history = useHistory();
  const [values, setValues] = useState({});

  const onchange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  function gotoLogin(e) {
    e.preventDefault();
    history.push("/");
  }

  const Submit = (e) => {
    e.preventDefault();
  

    fetch('http://localhost:5000/api/v1/signup', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(
        (responseData) => {
          console.log(responseData);
        },
        (err) => console.log(err)
      );
  };

  return (
    <form>
      <h1>Signup</h1>
      <InputField
        label="Firstname"
        type="text"
        placeholder="e,g Joojo"
        name="firstname"
        onchange={onchange}
      />
      <InputField
        label="Lastname"
        type="text"
        placeholder="e.g. Kwofie"
        name="lastname"
        onchange={onchange}
      />

      <InputField
        label="Email"
        type="email"
        placeholder="e.g. Jojo@gmail.com"
        name="email"
        onchange={onchange}
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        placeholder="Password"
        onchange={onchange}
      />
      <InputField
        label="Confirm Password"
        type="password"
        name="cpassword"
        placeholder="Confirm Password"
        onchange={onchange}
      />

      <div>
        <Button text="Login" onClick={gotoLogin} />
        <Button text="Submit" onClick={Submit} />
      </div>
    </form>
  );
}

export default Signup;
