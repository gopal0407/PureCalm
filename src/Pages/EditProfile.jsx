import { useState } from 'react';
import { Row, Col, Image, Button, Form } from 'react-bootstrap';
import MyFooter from '../Componennts/footer/Footer';
import Navb from '../Componennts/Navbar/Navbar';
import { Helmet , HelmetProvider} from 'react-helmet-async';

const EditProfilePage = () => {
  // State for form inputs
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  // Function to handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>My Page Title</title>
        <meta name="description" content="This is the meta description for My Page." />
      </Helmet>
      
      <Navb />
      <div style={{ backgroundColor: '#fff', color: '#198754', padding: '50px 0' }}>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <h2>Edit Profile</h2>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={6} className="text-center">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Bio</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </Form.Group>
              {profilePicture && (
                <div className="mb-3">
                  <Image src={URL.createObjectURL(profilePicture)} roundedCircle style={{ width: '100px', height: '100px' }} />
                </div>
              )}
              <Button variant="outline-success" type="submit">Save Profile</Button>
            </Form>
          </Col>
        </Row>
      </div>
      <MyFooter />
    </HelmetProvider>
  );
}

export default EditProfilePage;
