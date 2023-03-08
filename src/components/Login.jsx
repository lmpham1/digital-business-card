import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

export default function Login(props) {
  return (
    <div className="login-container">
      <Card className="login-card">
        <Card.Title style={{ textAlign: "center" }}>Login</Card.Title>
        <Form className="login-form" onSubmit={props.handleUserLogin}>
          <Form.Group className="mb-3" controlId="formMacID">
            <Form.Label>Mac ID</Form.Label>
            <Form.Control type="text" placeholder="Enter Mac ID" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Card>
    </div>)
}