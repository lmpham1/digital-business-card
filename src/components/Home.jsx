import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QR from "./QR";

export default function Home(props) {
  return <Container className="home">
    <QR user={props.user} />
    <Row>
      <Col className="text-center">
        <Button variant="light">Edit</Button>
      </Col>
      <Col className="text-center">
        <Button variant="secondary" onClick={props.handleUserLogout}>Log Out</Button>
      </Col>
    </Row>
  </Container>
}