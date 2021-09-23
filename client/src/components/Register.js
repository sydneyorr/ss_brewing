import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { Button, Form } from "semantic-ui-react"
import { AuthContext } from "../providers/AuthProvider"

const Register = () => {
  const history = useHistory();
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [passwordConfirmation, setPasswordConfirmation] = useState(null)
  const { handleRegister } = useContext(AuthContext);

  const handleSubmit = (e) => {
    if (password !== passwordConfirmation) {
      alert("passwords do not match");
      return;
    } else {
    handleRegister( { email, password }, history )
    }

  };


  return (
    <div>
      <h1>Create an Account</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Input
        value={email}
        onChange={(e, {value}) => {
          setEmail(value);
        }}
        label={"Email"} />
        <Form.Input
        value={password}
        onChange={(e, {value}) => {
          setPassword(value);
        }}
        label={"Password"} />
        <Form.Input
        value={passwordConfirmation}
        onChange={(e, {value}) => {
          setPasswordConfirmation(value);
        }}
        label={"Password Confirmation"} />
        <Button>Create Account</Button>
      </Form>
    </div>
  )
}

export default Register;