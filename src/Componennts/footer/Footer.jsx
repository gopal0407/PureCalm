import { Nav } from 'react-bootstrap';

const MyFooter = () => {
  return (
    <div className="foot">

      <footer className="py-4 my-0 " style={{ backgroundColor: '#198754', color: 'white' }}>
        <Nav className="justify-content-center border-bottom pb-3 mb-3">
          <Nav.Item>
            <Nav.Link href="/home" className="px-2 text-white">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/therepies" className="px-2 text-white">Therepies</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/community" className="px-2 text-white">Community</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about" className="px-2 text-white">About Us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact" className="px-2 text-white">Contact Us</Nav.Link>
          </Nav.Item>
        </Nav>
        <p className="text-center">© 2024 PureCalm</p>
      </footer>
    </div>
  );
};

export default MyFooter;
