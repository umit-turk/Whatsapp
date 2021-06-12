import { Container, UserAvatar } from "./chatStyles";

function Chat({ id, users }) {
  return (
    <Container>
        <UserAvatar />
      <p>Recipient Email</p>
    </Container>
  );
}

export default Chat;
