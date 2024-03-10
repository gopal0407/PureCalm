import { Container, Card, Button } from 'react-bootstrap';
import './yogacard.css';
import { Link } from 'react-router-dom';

const YogaServices = [
    {
      id: 1,
      url: "/yoga/surya-namaskar",
      img: "/Sun_Salutation_Surya_Namaskar.jpg",
      title: "Sun Salutation (Surya Namaskar)",
      des:
        "Energizing sequence linking breath with movement, warming up the body and mind."
    },
    {
        id: 2,
        url: "/yoga/vrksasana",
        img: "/Tree_Pose_Vrksasana.jpg",
        title: "Tree Pose (Vrksasana)",
        des:
          "Balance posture, grounding through one leg while extending arms upward, fostering concentration and stability."
      },
      {
        id: 3,
        url: "/yoga/adho-mukha-svanasana",
        img: "/Downward_Facing_Dog_Adho_Mukha_Svanasana.jpg",
        title: "Downward Facing Dog (Adho Mukha Svanasana)",
        des:
          "Inverted pose, lengthening spine while strengthening arms and legs, promoting relaxation and rejuvenation."
      },
      {
        id: 4,
        url: "/yoga/virabhadrasana-II",
        img: "/Warrior_II_Virabhadrasana_II.jpg",
        title: "Warrior II (Virabhadrasana II)",
        des:
          "Strength-building posture, grounding through legs while opening hips and arms, cultivating focus and determination."
      },
      {
        id: 5,
        url: "/yoga/balasana",
        img: "/Childs_Pose_Balasana_yoga.jpg",
        title: "Child's Pose (Balasana)",
        des:
          "Restorative posture, gently stretching the back while promoting relaxation and introspection, soothing the mind and body."
      },
  ];

function YogaCard() {
    return (
        <div className="yogaServices mt-5">

        <Container className='cardsContainer'>
            <h1 className="text-center mb-4" style={{fontSize:'60px'}}>Yoga Therapies</h1>
            <p className='desc'>Yoga therapy integrates traditional yoga with therapeutic techniques to enhance physical health and mental well-being. Personalized practices empower individuals, promoting balance and fostering a harmonious lifestyle</p>
            <div className="cards">

            {YogaServices.map((YogaServices) => (
                <Card className='singleCard' key={YogaServices.id} style={{ maxWidth: '540px' }}>
                    <div className="row no-gutters">
                        <div className="col-md-4 cardsImg ">
                            <Card.Img  src={YogaServices.img} />
                        </div>
                        <div className="col-md-8">
                            <Card.Body>
                                <Card.Title>{YogaServices.title}</Card.Title>
                                <Card.Text>{YogaServices.des}</Card.Text>
                                <Link to={YogaServices.url}>
                                    <Button variant="success">Explore</Button>
                                </Link>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
            ))}
            </div>
        </Container>
        </div>
    );
}

export default YogaCard;
