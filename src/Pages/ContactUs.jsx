import { Container, Row, Col } from 'react-bootstrap';
import Navb from '../Componennts/Navbar/Navbar';
import MyFooter from '../Componennts/footer/Footer';
import Chat from '../Componennts/chatbot/Chat';
import { Helmet ,HelmetProvider} from 'react-helmet-async';


function ContactUs() {
  return (
<HelmetProvider>
<Helmet>
        <title>My Page Title</title>
        <meta name="description" content="This is the meta description for My Page." />
      </Helmet>
      
    <Navb />
    <Container className="my-5">
    <Row className="mb-5">
    <Col className="mt-4"> {/* Add mt-4 class to add margin-top */}
      <h2 className="text-center">Contact Us</h2>
    </Col>
  </Row>
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <p>
            We'd love to hear from you! If you have any questions, feedback, or
            inquiries, please dont hesitate to get in touch with us using the
            contact information below.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="text-center">
          <h4>Contact Information</h4>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md={6} className="text-center">
          <p><strong>Email:</strong> purecalm@accessiblehealthcare.com</p>
          <p><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p><strong>Address:</strong> 123 Main Street, Pune, India</p>
        </Col>
      </Row>
    </Container>
    <MyFooter />
    <Chat />
  </HelmetProvider>
  )
}

export default ContactUs