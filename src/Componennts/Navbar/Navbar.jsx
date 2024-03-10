import "./navbar.css"
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Navb() {
  return (
    <div>
        <Navbar fixed="top" expand="sm" bg="success" variant="dark" aria-label="Third navbar example" className="navv">

      <Navbar.Brand href="#" className="mx-5" style={{ fontSize: '18px', display: 'flex', alignItems: 'center',gap:'5px' }}>
        <img
          alt=""
          src="/PureCalm_circle.png"
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{'   '}
        <b>PureCalm</b>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarsExample03" />
      <Navbar.Collapse id="navbarsExample03">
        <Nav className="me-auto mb-2 mb-sm-0">
          <Nav.Link href="/home">Home</Nav.Link>
          <NavDropdown title="Therepies" id="basic-nav-dropdown">
            <NavDropdown.Item href="/yoga">Yoga</NavDropdown.Item>
            <NavDropdown.Item href="/spiritual">Spiritual</NavDropdown.Item>
            <NavDropdown.Item href="/music">Music</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/community" >Community</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Link to={"/profile"}>
      <Navbar.Text className="mx-3">
          <img
            alt="Profile"
            src="/PureCalm.jpg"
            width="40"
            height="40"
            style={{ borderRadius: '50%', cursor: 'pointer' }}
          />
        </Navbar.Text>
        </Link>
        
    </Navbar>
    </div>
  )
}

export default Navb