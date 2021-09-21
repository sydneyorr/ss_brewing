import "./App.css";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router";
import { routes } from "./components/routes";
import NavBar from "./components/NavBar.js";

function App() {
const renderRoutes = () => {
  return routes.map((route)=> (
    <Route exact path = {route.pathname} component={route.component} />
  ))
}




  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          {renderRoutes()}
        </Switch>
      </Container>
    </>
  );
}

export default App;
