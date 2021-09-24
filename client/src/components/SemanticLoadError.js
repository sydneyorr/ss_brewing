
import { useContext } from "react";
import { Message } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";

const SemanticLoadError = ({ header }) => {
  const { error } = useContext(AuthContext);
  return (
    <Message negative>
      <Message.Header>{header}</Message.Header>
      <code>{JSON.stringify(error)}</code>
    </Message>
  );
};
export default SemanticLoadError;