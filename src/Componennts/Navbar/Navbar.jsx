import "./navbar.css"
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


function Navb() {
  return (
    <div>
        <Navbar fixed="top" expand="sm" bg="success" variant="dark" aria-label="Third navbar example" className="navv">

      <Navbar.Brand to="#" className="mx-5" style={{ fontSize: '18px', display: 'flex', alignItems: 'center',gap:'5px' }}>
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
          <Nav.Link><NavLink className={"navlink"} to={"/home"}>Home</NavLink></Nav.Link>
          <NavDropdown className={"navlink"}  title="Therepies" to={"/Therepies"} id="basic-nav-dropdown">
            <NavDropdown.Item><NavLink className={"navlinkDropdown"} to={"/yoga"}>Yoga</NavLink></NavDropdown.Item>
            <NavDropdown.Item><NavLink className={"navlinkDropdown"} to={"/spiritual"}>Spiritual</NavLink></NavDropdown.Item>
            <NavDropdown.Item><NavLink className={"navlinkDropdown"} to={"/music"}>Music</NavLink></NavDropdown.Item>
          </NavDropdown>
          <Nav.Link><NavLink className={"navlink"} to={"/community"} >Community</NavLink></Nav.Link>
          <Nav.Link><NavLink className={"navlink"} to={"/about"}>About Us</NavLink></Nav.Link>
          <Nav.Link><NavLink className={"navlink"} to={"/contact"}>Contact Us</NavLink></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default Navb