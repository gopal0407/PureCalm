import "./choose.css"
import {Container,Row,Col} from 'react-bootstrap';
import { RiUser5Fill } from "react-icons/ri";
import { BsAwardFill } from 'react-icons/bs';
import { BsPeopleFill } from 'react-icons/bs';
import { BsLayersFill } from 'react-icons/bs';

function Choose() {
  return (
    <div>
        <Container className="mt-5">
      <Row id="why-choose-us" className="mb-5">
          <div className="text-center mb-3">
            <h2>Why Choose Us?</h2>
          </div>
          <div>
          <Row className="justify-content-center chooseCard">
              <Col md={3} className="mb-3 text-center ">
              <RiUser5Fill size={50} color="#198754" className="mb-3" />
                <h4>User-Friendly Interface</h4>
                <p>We offer a user-friendly interface, making it easy for users to navigate and access our services.</p>
              </Col>
              <Col md={3} className="mb-3 text-center">
              <BsAwardFill size={50} color="#198754" className="mb-3" />
                <h4>Quality Therapy</h4>
                <p>Our therapies are of the highest quality, delivered by experienced professionals to ensure optimal results.</p>
              </Col>
              <Col md={3} className="mb-3 text-center">
                <BsPeopleFill size={50} color="#198754" className="mb-3" />
                <h4>Community Engagement</h4>
                <p>Engage with our community to share experiences, insights, and support related to mind relaxation techniques.</p>
              </Col>
              <Col md={3} className="mb-3 text-center">
                <BsLayersFill size={50} color="#198754" className="mb-3" />
                <h4>Holistic Approach</h4>
                <p>Our holistic approach to wellness integrates various practices to address the mind, body, and spirit for comprehensive well-being.</p>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Choose