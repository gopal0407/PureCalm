import "./about.css"
import { Container, Row, Col ,Button } from 'react-bootstrap';

function About() {
  return (
    <div>
        <section className="about-section" style={{ padding: '50px 0' }}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="about-image">
                            <img src="/PureCalm.jpg" alt="About" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="about-content">
                            <h2>About Us</h2>
                            <p>More than just therapy, its personalized care</p>
                            <p>We go beyond traditional methods, creating a supportive environment where you can explore and discover the therapies that truly work for you.Since our inception, we have helped individuals find lasting peace and vitality.</p>
                        </div>
                        <div className="social-media-buttons">
                            <Button variant="outline-success" href="https://www.instagram.com">Instagram</Button>{' '}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </div>
    )
}

export default About