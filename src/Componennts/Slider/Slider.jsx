import { Carousel, Button } from 'react-bootstrap';
import './slider.css';
import { Link } from 'react-router-dom';

const Sliders = [
  {
    id: 1,
    url: "/yoga/surya-namaskar",
    img: "/Sun_Salutation_Surya_Namaskar.jpg",
    alt: "Surya Namaskar",
    label: "Sun Salutation (Surya Namaskar)",
    placeholder:
      "Energizing sequence linking breath with movement, warming up the body and mind."
  },
  {
    id: 2,
    url: "/music/NaturesSymphony",
    img: "/Natures_Symphony.jpg",
    alt: "Natures Symphony",
    label: "Natures Symphony",
    placeholder:
      "Soothing sounds of nature, calming the mind and body, promoting relaxation and inner peace."
  },
  {
    id: 3,
    url: "/spiritual/shlokas",
    img: "/Bells.jpg",
    alt: "Shlokas",
    label: "Shlokas",
    placeholder:
      "Ancient Vedic hymns, promoting mental peace and spiritual well-being."
  },
];


function Slider() {
  return (
    <div>
      <Carousel className='carous w-100' style={{width:100}}  interval={1000}>
      {Sliders.map((Sliders) => (

          <Carousel.Item key={Sliders.id} className='slides'>
            <img
              className="d-block w-100 h-500"
              src={Sliders.img}
              alt={Sliders.alt}
            />
            <Carousel.Caption >
              <h5>{Sliders.label}</h5>
              <p>{Sliders.placeholder}</p>
              <Link to={Sliders.url}>
              <Button variant="success">Explore</Button>
              </Link>
            </Carousel.Caption>


          </Carousel.Item>
      ))}
      </Carousel>
    </div>
  )
}

export default Slider