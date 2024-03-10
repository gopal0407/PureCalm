import { Link } from "react-router-dom";
import "./musicCategory.css"
import { Container, Card, Button } from 'react-bootstrap';


const MusicCategories = [
    {
      id: 1,
      url:"/music/NaturesSymphony",
      img: "/Natures_Symphony.jpg",
      title: "Nature's Symphony",
      des:
        "Harmonious melodies inspired by the natural world, evoking a sense of calm and connection with the earth."
    },
    {
        id: 2,
        url:"/music/CosmicJourney",
        img: "/Cosmic_Journey.jpg",
        title: "Cosmic Journey",
        des:
          "Celestial sounds and cosmic rhythms for deep introspection and exploration of inner space and consciousness."
      },
      {
        id: 3,
        url:"/music/InstrumentalOasis",
        img: "/Instrumental_Oasis.jpg",
        title: "Instrumental Oasis",
        des:
          "Relaxing melodies and soothing harmonies without lyrics, allowing listeners to focus on the music's emotive power and beauty."
      },
      {
        id: 4,
        url:"/music/YogaFlow",
        img: "/Yoga_Flow.jpg",
        title: "Yoga Flow",
        des:
          "Uplifting tunes with rhythmic flows to enhance yoga practice and promote a harmonious mind-body connection."
      },
  ];


function MusicCategory() {
  return (
    <div className="musictherepy">
        <h1 style={{fontSize:'60px'}}>Music Therapy</h1>
        <p className="desc mx-5 mt-4 mb-4">Music therapy harmonizes the mind and soul through therapeutic sound interventions. Utilizing melodies, rhythms, and creative expression, it promotes emotional release, mental well-being, and a holistic sense of harmony.</p>
        <Container className='musicCategory'>
            <div className="cards">
            {MusicCategories.map((MusicCategories) => (
                <Card className='singleCard' key={MusicCategories.id} style={{ maxWidth: '540px' }}>
                    <div className="row no-gutters">
                        <div className="col-md-4 cardsImg ">
                            <Card.Img  src={MusicCategories.img} />
                        </div>
                        <div className="col-md-8">
                            <Card.Body>
                                <Card.Title>{MusicCategories.title}</Card.Title>
                                <Card.Text>{MusicCategories.des}</Card.Text>
                                <Link to={MusicCategories.url}>
                                <Button variant="success">Explore Music</Button>
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

export default MusicCategory