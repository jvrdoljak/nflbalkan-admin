import { Container, Nav, Navbar } from "react-bootstrap";

export const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href={'/admin'}>Dashboard</Nav.Link>
            <Nav.Link href={'/admin/posts'}>Posts</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}