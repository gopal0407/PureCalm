import "./yogainfo.css";
import PropTypes from 'prop-types'; // Import PropTypes
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useState } from 'react';

function YogaInfo({ yogaInfo, images ,video }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <div className="yogaInfoMain">
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <div className="video-container">
              <video controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Col>
          <Col md={6}>
            <div className="image-gallery">
              <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} className="gallery-image" />
              <button onClick={nextImage} className="nextBtn">Next</button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className='yogaInfoCardsContainer'>
        <Row className="yogaInfoCards mt-5">
          {yogaInfo.map((yogaInfoItem) => (
            <Col md={12} key={yogaInfoItem.id}>
              <Card className="yogaInfoCard">
                <Card.Body>
                  <Card.Title><strong>{yogaInfoItem.title}</strong></Card.Title>
                  <ul>
                    {yogaInfoItem.points.split(',').map((point, index) => (
                      <li key={index}>{point.trim()}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

YogaInfo.propTypes = {
  yogaInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      points: PropTypes.string.isRequired
    })
  ).isRequired,
  images: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  video: PropTypes.string.isRequired
};

export default YogaInfo;
