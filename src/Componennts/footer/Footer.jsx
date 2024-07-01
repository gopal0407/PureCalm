import { Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MyFooter = () => {
  return (
    <div className="foot">
      <footer className="py-4 my-0 " style={{ backgroundColor: '#198754', color: 'white' }}>
        <Nav className="justify-content-center border-bottom pb-3 mb-3">
          <Nav.Item>
          <Nav.Link><NavLink  to="/home" className="px-2 text-white navlink">Home</NavLink></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link><NavLink to="/therepies" className="px-2 text-white navlink">Therepies</NavLink></Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link><NavLink to="/community" className="px-2 text-white navlink">Community</NavLink></Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link><NavLink to="/about" className="px-2 text-white navlink">About Us</NavLink></Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link><NavLink to="/contact" className="px-2 text-white navlink">Contact Us</NavLink></Nav.Link>
          </Nav.Item>
        </Nav>
        <p className="text-center">© 2024 PureCalm</p>
      </footer>
    </div>
  );
};

export default MyFooter;
