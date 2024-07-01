import { Container, Card, Button } from 'react-bootstrap';
import './therepies.css';
import { Link } from "react-router-dom";

const TherepyServices = [
    {
      id: 1,
      url:"/yoga",
      img: "/Yoga_Sanctuary.jpg",
      title: "Yoga Sanctuary: Unwind with Mental Health Yoga",
      des:
        "Dive into various yoga practices tailored for mental well-being, offering relaxation and inner peace techniques."
    },
    {
        id: 2,
        url:"/spiritual",
        img: "/Spiritual_Serenity.jpg",
        title: "Spiritual Serenity: Mantras and Slokas for Calm",
        des:
          "Discover soothing mantras and sacred verses to ease stress and nurture spiritual tranquility for mental wellness."
      },
      {
        id: 3,
        url:"/music",
        img: "/Audio_Refuge.jpg",
        title: "Audio Refuge: Playlists for Mental Health Solutions",
        des:
          "Access handpicked Spotify playlists featuring diverse songs designed to uplift moods and promote mental health."
      },
  ];

function Therepies() {
  return (
    <div className='therepies' >
        <h2 className="text-center mb-4">Therapies We Provide</h2>
        <Container className='therepyContainer'>
            <div className="therepyCards">

            {TherepyServices.map((TherepyServices) => (
                <Card className='therepySingleCard' key={TherepyServices.id} style={{ maxWidth: '540px' }} sm>
                    <div className="row no-gutters">
                        <div className="col-md-12 therepyCardsImg">
                            <Card.Img src={TherepyServices.img} />
                        </div>
                        <div className="col-md-12">
                            <Card.Body>
                                <Card.Title>{TherepyServices.title}</Card.Title>
                                <Card.Text>{TherepyServices.des}</Card.Text>
                                <Link to={TherepyServices.url}>
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
  )
}

export default Therepies