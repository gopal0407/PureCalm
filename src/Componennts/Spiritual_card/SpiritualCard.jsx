import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './spiritualcard.css'

const SpiritualServices = [
    {
        id: 1,
        url: "/spiritual/shlokas",
        img: "/Bells.jpg",
        title: "Shlokas",
        des:
          "Shlokas are form of Sanskrit epics, are prevalent in Hindu scriptures like the Mahabharata, Ramayana, Upanishads, etc."
    },
    {
        id: 2,
        url: "/spiritual/mantras",
        img: "/Buddha.jpg",
        title: "Mantras",
        des:
          "Mantras are sacred sounds, words, or phrases used in various traditions for spiritual growth, focus, and healing."
    },
  ];

function SpiritualCard() {
    return (
        <div className="spiritualServices">

        <Container className='spiritualCardsContainer'>
            <h1 className="text-center mb-4">Spiritual Therapies</h1>
            <p className='descrip'>Spiritual therapy delves into the soul's well-being, intertwining traditional wisdom with therapeutic methods. By fostering spiritual awareness, it cultivates inner peace, purpose, and a profound connection to a higher self.</p>
            <div className="spiritualCards">

            {SpiritualServices.map((YogaServices) => (
                <Card className='spiritualSingleCard' key={YogaServices.id} style={{ maxWidth: '400px' }}>
                    <div className="row no-gutters">
                        <div className="col-md-4 spiritualCardsImg ">
                            <Card.Img  src={YogaServices.img} />
                        </div>
                        <div className="col-md-8">
                            <Card.Body>
                                <Card.Title>{YogaServices.title}</Card.Title>
                                <Card.Text>{YogaServices.des}</Card.Text>
                                <Link to={YogaServices.url}>
                                            <Button variant="success">Read More</Button>
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

export default SpiritualCard;
