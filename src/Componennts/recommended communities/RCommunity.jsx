import  { useState } from 'react';
import { Container, Card, Image, Carousel, Button } from 'react-bootstrap';
import './rcommunity.css'; 
import { Link } from 'react-router-dom';

const RCommunity = () => {
  const recommendedCommunities = [
    {
      id: 1,
      url: "https://adaa.org/find-help/support",
      image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/04/1084612-The-8-Best-Anxiety-Support-Groups-of-2021-ADAA.png?w=315&h=840",
      title: "Anxiety Support Group",
      description: "A community dedicated to providing support and resources for individuals dealing with anxiety disorders."
    },
    {
      id: 2,
      url: "https://www.nimh.nih.gov/health/publications/depression",
      image: "https://www.nimh.nih.gov/sites/default/files/images/pubs/covers-pinnable/21-mh-8079_depression_pinnable.jpg",
      title: "Depression Recovery Network",
      description: "Join our community to share experiences, coping strategies, and find support on the journey to recovery from depression."
    },
    {
      id: 3,
      url: "https://www.physio-pedia.com/Bipolar_Disorder",
      image: "https://nurseslabs.com/wp-content/uploads/2016/10/Bipolar-Disorder-Nursing-Care-Plans-and-Nursing-Diagnosis.jpg",
      title: "Bipolar Disorder Alliance",
      description: "Connect with others who understand the challenges of living with bipolar disorder and find support in our community."
    },
    {
      id: 4,
      url: "https://www.ptsd.va.gov/gethelp/peer_support.asp",
      image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/09/1587908-The-Best-Online-PTSD-Support-Groups-of-2021-myPTSD.png?w=315&h=846",
      title: "PTSD Survivors Group",
      description: "A safe space for individuals who have experienced trauma to share their stories, find support, and learn coping strategies."
    },
    {
      id: 5,
      url: "https://iocdf.org/ocd-finding-help/supportgroups/",
      image: "https://via.placeholder.com/150",
      title: "OCD Support Circle",
      description: "Join us to connect with others who understand the challenges of living with Obsessive-Compulsive Disorder and find support."
    },
    {
      id: 6,
      url: "https://forum.schizophrenia.com/",
      image: "https://assets.themighty.com/image/upload/f_auto,fl_lossy,q_auto,c_fill,w_928,h_271/v1629262975/prod/uploads/611c947ea913ec0108b38fc9.png",
      title: "Schizophrenia Community Forum",
      description: "A supportive community for individuals and families affected by schizophrenia to share experiences and find understanding."
    },
    {
      id: 7,
      url: "https://www.eatingdisorderhope.com/treatment-for-eating-disorders/international/india",
      image: "https://m.media-amazon.com/images/I/51tIQg+uwLS.jpg",
      title: "Eating Disorders Recovery Network",
      description: "Find support, encouragement, and resources for recovery from anorexia, bulimia, and other eating disorders in our community."
    },
    {
      id: 8,
      url: "https://indianhelpline.co.in/de-addiction-helpline-numbers/",
      image: "https://attcnetwork.org/sites/default/files/inline-images/online_support_groups_header.jpg",
      title: "Substance Abuse Support Group",
      description: "Connect with others who are on the path to recovery from substance abuse and find encouragement and guidance in our community."
    },
    {
      id: 9,
      url: "https://www.betterhealth.vic.gov.au/health/servicesandsupport/autism-spectrum-disorder-support-services#:~:text=Therapy%20Connect%20is%20a%20resource,sources%20of%20information%20and%20support.",
      image: "data:image/png;base64,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",
      title: "Autism Spectrum Support",
      description: "A community for individuals, families, and caregivers affected by autism spectrum disorders to share experiences and find support."
    },
    
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="community-page">

      <Container >
        <h1 className="text-center cHeaing">Recommended Communities</h1>
        <Container className='cards-corousal'>

      <Button variant="success" onClick={() => setIndex(index - 1)} disabled={index === 0}>prev</Button>
        <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
          {recommendedCommunities.map(community => (
            <Carousel.Item key={community.id}>
              <Link to={community.url} className="card-link">
                <Card className="h-100 communitycard">
                  <div className="community-image d-flex justify-content-center align-items-center">
                    <Image src={community.image} roundedCircle fluid className='image-community' />
                  </div>
                  <Card.Body>
                    <Card.Title className="text-center">{community.title}</Card.Title>
                    <Card.Text className="text-center">{community.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
        <Button variant="success" onClick={() => setIndex(index + 1)} disabled={index === recommendedCommunities.length - 1} className="ms-2">Next</Button>
        </Container>
        
      </Container>
    </div>
  );
}

export default RCommunity;
