import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container"

export default function Profile(props) {
  const user = props.user;
  return <Container className="profile">
    <Card>
      <Row className="g-0">
        <Col className="col-md-4 text-center left-card pt-4 pb-4">
          <h5 className="my-2">{user.name}</h5>
          {user.pronounce && <i>({user.pronounce})</i>}
          <p className="mb-0">{user.title}</p>
          <p>{user.department}</p>
        </Col>
        <Col className="col-md-8">
          <Card.Body className="p-4">
            <h6>Information</h6>
            <hr className="mt-0 mb-4" />
            <Row className="mt-0 mb-4">
              <Col className="mb-3 col-6">
                <h6>Email</h6>
                <a className="text-muted" href={"mailto:" + user.email}>{user.email}</a>
              </Col>
              <Col className="mb-3 col-6">
                <h6>Phone</h6>
                <a className="text-muted" href={"tel:" + user.phone}>{user.phone}</a>
              </Col>
            </Row>

            <Row className="mt-0 mb-4">
              <Col className="mb-3 col-6">
                <h6>Building</h6>
                <p className="text-muted">{user.location}</p>
              </Col>
              <Col className="mb-3 col-6">
                <h6>Address</h6>
                <p className="text-muted">{user.address}</p>
              </Col>
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  </Container>
}
