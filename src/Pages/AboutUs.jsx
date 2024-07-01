import { Container, Row, Col, Image } from 'react-bootstrap';
import Navb from '../Componennts/Navbar/Navbar';
import MyFooter from '../Componennts/footer/Footer';
import { Helmet,HelmetProvider } from 'react-helmet-async';


function AboutUs() {
  return (
    <HelmetProvider>
    <Helmet>
        <title>Passionate Developers</title>
        <meta name="description" content="Meet the dedicated developers building innovative solutions for mental well-being." />
      </Helmet>

    <Navb />
    <Container className="my-5 pt-5 ">
      <Row className="mb-2">
        <Col>
          <h1 className="text-center ">About Us</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <p style={{fontSize:'20px'}}>
            Our team at Accessible Healthcare Solutions is committed to
            revolutionizing the healthcare industry by providing innovative and
            accessible solutions to improve patient care.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="text-center">
          <h4>Meet Our Founder</h4>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md={3} className="text-center">
          <Image src="/dev_gopal.jpeg" roundedCircle className="mb-3 img-fluid" style={{ maxWidth: '150px', maxHeight: '150px' }} />
          <h5>Gopal Sawant</h5>
          <p>Founder</p>
        </Col>
      </Row>
    </Container>
    <MyFooter />
    </HelmetProvider>
  )
}

export default AboutUs