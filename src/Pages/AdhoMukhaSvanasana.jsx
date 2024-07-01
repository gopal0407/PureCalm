import Navb from "../Componennts/Navbar/Navbar"
import MyFooter from "../Componennts/footer/Footer"
import YogaInfo from "../Componennts/suryanamaskar/YogaInfo"
import { Helmet,HelmetProvider } from 'react-helmet-async';



const yogaInfoData = [
  {
    id: 1,
    title: "Advantages",
    points:
      "Full Body Stretch: Lengthens spine hamstrings and shoulders for overall flexibility,Stress Relief: Inverted posture calms the mind relieving stress and fatigue."
  },
  {
    id: 2,
    title: "Do's",
    points:
      "Spread Fingers and Toes: Distribute weight evenly preventing strain on wrists and feet.,Breathe Deeply: Focus on deep steady breaths for relaxation and endurance."
  },
  {
    id: 3,
    title: "Don'ts",
    points:
      "Avoid Rounded Back: Keep the spine straight; avoid rounding in the upper back.,Don't Overstrain Modify as needed don't force heels to touch the mat."
  },
];

const imagesData = [
    "/Adho/adho-1.png",
    "/Adho/adho-2.png",
    "/Adho/adho-3.png",
];


function AdhoMukhaSvanasana() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Adho Mukha Svanasana</title>
        <meta name="description" content="This page provides you with the video and photo for Adho Mukha Svanasana." />
      </Helmet>


      <Navb />
      <header className="text-center mt-5 pt-5" >
        <h1 style={{fontSize:'50px'}}>Downward Facing Dog (Adho Mukha Svanasana)</h1>
      </header>
      <YogaInfo yogaInfo={yogaInfoData} images={imagesData} video="/adhomukh.mp4" />
      <MyFooter />
      <Chat />
    </HelmetProvider>
  )
}

export default AdhoMukhaSvanasana