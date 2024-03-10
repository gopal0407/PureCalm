import { useState, useEffect } from 'react';
import "./hero.css";
import { Row, Col, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Hero() {
  const [text, setText] = useState('');
  const fullText = "Nurture your mental health with our array of therapeutic offerings. From mindfulness to tailored interventions, find the support you need for a resilient and flourishing mind.";
  const typingSpeed = 60; 
  const loopDelay = 3000; 

  useEffect(() => {
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex <= fullText.length) {
        setText(fullText.substring(0, currentIndex));
        currentIndex++;
        setTimeout(typeText, typingSpeed);
      } else {
        setTimeout(startTypingLoop, loopDelay);
      }
    };

    // Function to start the typing loop
    const startTypingLoop = () => {
      currentIndex = 0;
      setText('');
      typeText();
    };

    // Start typing loop after delay
    setTimeout(startTypingLoop, loopDelay);

    // Clean up function to clear timeouts when component unmounts
    return () => {
      clearTimeout(startTypingLoop);
      clearTimeout(typeText);
    };
  }, []);

  return (
    <div className="hero">
      <Container className="m-5">
        <Row className="mb-5 align-items-center mt-5">
          <Col md={6} className='heroText'>
            <div>
              <h1>Discover Healing Paths: </h1>
              <h3>A Sanctuary of Varied Therapies for Mental Wellness</h3>
            </div>
            <p>{text}</p>
            <div className="heroBtn">
              <Link to={"/therepies"}>
                <Button variant="success">Discover</Button>
              </Link>
              <Link to={"/community"}>
                <Button variant="outline-success">Join Community</Button>
              </Link>
            </div>
          </Col>
          <Col md={6} className='heroImg'>
            <img src="/hero.jpg" alt="Hero" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero;
