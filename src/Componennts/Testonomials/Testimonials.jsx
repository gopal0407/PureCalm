import { Container, Row, Col } from 'react-bootstrap';
import "./testimonials.css";

const testimonials = [
    { 
        text: "I was suffering from a back pain, the Yoga Section Therapy provided by PureCalm helped me to overcome the physical problems with wonderful yoga exercises!!",
        author: "Mrs. Madhuri Borawake" 
    },
    { 
        text: "The website appears to be user-friendly, with clear navigation and organization of content. Visitors can easily access information about different therapies and practices, making it simple for them to explore and find relevant resources.", 
        author: "Mr.Arnav Shah" 
    },
    { 
        text: "I was suffering from a mental stress during Exams, the Audio therapy provided by PureCalm helped me to overcome the Stress with Amazing Audio PLaylists !!", 
        author: "Sumit Gujar" 
    },
];

function Testimonials() {

    return (
        <section className="testimonial-section" style={{ backgroundColor: '#198754', color: '#fff', padding: '50px 0' }}>
            <Container>
                <h2 className="text-center mb-5">Testimonials</h2>
                <Row>
                    {testimonials.map((testimonial, index) => (
                        <Col key={index} md={4}>
                            <div className="testimonial">
                                <p>{testimonial.text}</p>
                                <h4>- {testimonial.author}</h4>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Testimonials;
