import Navb from "../Componennts/Navbar/Navbar"
import MyFooter from "../Componennts/footer/Footer"
import YogaInfo from "../Componennts/suryanamaskar/YogaInfo"
import { Helmet,HelmetProvider } from 'react-helmet-async';


const yogaInfoData = [
  {
    id: 1,
    title: "Advantages",
    points:
      "Balance and Stability: Strengthens legs and core enhancing balance and stability.,Concentration: Improves focus and concentration promoting mental clarity."
  },
  {
    id: 2,
    title: "Do's",
    points:
      "Focus on a Point: Fix your gaze on a stable point for better balance.,Engage Core Muscles: Activate the core to enhance stability and posture"
  },
  {
    id: 3,
    title: "Don'ts",
    points:
      "Avoid Locked Joints: Keep a micro-bend in the standing knee to avoid strain.,Don't Hold Breath: Maintain steady breathing; avoid breath-holding."
  },
];

const imagesData = [
  "/Vrik/Vrik-1.png",
  "/Vrik/Vrik-2.png",
  "/Vrik/Vrik-3.png",
  "/Vrik/Vrik-4.png",
  "/Vrik/Vrik-5.png",
];


function Vrksasana() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Vrksasana</title>
        <meta name="description" content="This page provides you with the video and photo for vrkasana." />
      </Helmet>
      
      <Navb />
      <header className="text-center mt-5 pt-5" >
        <h1 style={{fontSize:'60px'}}>Tree Pose (Vrksasana)</h1>
      </header>
      <YogaInfo yogaInfo={yogaInfoData} images={imagesData} video="/vrksasana.mp4" />
      <MyFooter />
    </HelmetProvider>
  )
}

export default Vrksasana