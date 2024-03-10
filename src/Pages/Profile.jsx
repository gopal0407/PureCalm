import { useState } from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import MyFooter from '../Componennts/footer/Footer';
import Navb from '../Componennts/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { Helmet ,HelmetProvider} from 'react-helmet-async';

const ProfileSection = () => {
  // State to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Mock data for posts
  const posts = [
    { category: 'Yoga', content: 'Yoga post 1' },
    { category: 'Yoga', content: 'Yoga post 2' },
    { category: 'Spiritual', content: 'Spiritual post 1' },
    { category: 'Spiritual', content: 'Spiritual post 2' },
    { category: 'Music', content: 'Music post 1' },
    { category: 'Music', content: 'Music post 2' },
  ];

  // Filter posts based on the selected category
  const filteredPosts = selectedCategory ? posts.filter(post => post.category === selectedCategory) : posts;

  return (
    <HelmetProvider>
      <Helmet>
        <title>My Page Title</title>
        <meta name="description" content="This is the meta description for My Page." />
      </Helmet>
      
      <Navb />
      <div style={{ backgroundColor: '#fff', color: '#198754' }}>
        <Row className="justify-content-center" style={{ backgroundColor: '#198754', paddingTop: '50px', paddingBottom: '50px', color: '#fff' }}>
          <Col xs={12} md={4} className="text-center">
            <Image src="/PureCalm_circle.png" roundedCircle style={{ width: '200px', height: '200px' }} />
            <h2 style={{ marginTop: '20px' }}>Username</h2>
            <p>Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to="/profile/edit">
            <Button variant="light">Edit Profile</Button>
            </Link>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={8} className="text-center">
            <h3 className='my-5'>Posts</h3>
            <div className="d-flex justify-content-around flex-wrap my-5">
              <button onClick={() => setSelectedCategory(null)} style={{ backgroundColor: '#198754', color: '#fff', margin: '5px', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>All</button>
              <button onClick={() => setSelectedCategory('Yoga')} style={{ backgroundColor: '#198754', color: '#fff', margin: '5px', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>Yoga</button>
              <button onClick={() => setSelectedCategory('Spiritual')} style={{ backgroundColor: '#198754', color: '#fff', margin: '5px', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>Spiritual</button>
              <button onClick={() => setSelectedCategory('Music')} style={{ backgroundColor: '#198754', color: '#fff', margin: '5px', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>Music</button>
            </div>
            <Row>
              {filteredPosts.map((post, index) => (
                <Col key={index} xs={12} sm={6} md={3} className="mb-4">
                  <p>{post.content}</p>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
      <MyFooter />
    </HelmetProvider>
  );
}

export default ProfileSection;
