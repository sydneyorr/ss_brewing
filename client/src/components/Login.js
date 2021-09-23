import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { Button, Form } from "semantic-ui-react"
import { AuthContext } from "../providers/AuthProvider"

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const { handleLogin } = useContext(AuthContext);

  const handleSubmit = (e) => {
    handleLogin({ email, password }, history);
  };



  return (
    <div>
      <h1>Log in</h1>
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
        <Button>Login</Button>
      </Form>
    </div>
  )
}

export default Login;