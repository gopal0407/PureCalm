import Navb from "../Componennts/Navbar/Navbar"
import MyFooter from "../Componennts/footer/Footer"
import YogaInfo from "../Componennts/suryanamaskar/YogaInfo"
import { Helmet ,HelmetProvider} from 'react-helmet-async';


const yogaInfoData = [
  {
    id: 1,
    title: "Advantages",
    points:
      "Restorative: Relaxes the spine and neck providing a restorative stretch.,Stress Release: Calms the mind relieves tension and aids in stress reduction"
  },
  {
    id: 2,
    title: "Do's",
    points:
      "Restorative: Relaxes the spine and neck providing a restorative stretch,Stress Release: Calms the mind relieves tension and aids in stress reduction."
  },
  {
    id: 3,
    title: "Don'ts",
    points:
      "Knees Comfortable: Keep knees hip-width apart for comfort and relaxation.,Extend Arms Forward: Lengthen the spine by reaching arms forward on the mat."
  },
];

const imagesData = [
"/Bala/bala-1.png",
"/Bala/bala-2.png",
"/Bala/bala-3.png",
];


function Balasana() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Balasana</title>
        <meta name="description" content="This page provides you with the video and photo for Balasana." />
      </Helmet>

      
      <Navb />
      <header className="text-center mt-5 pt-5">
        <h1 style={{fontSize:'60px'}}>Childs Pose (Balasana)</h1>
      </header>
      <YogaInfo yogaInfo={yogaInfoData} images={imagesData} video="/balasana.mp4" />
      <MyFooter />
    </HelmetProvider>
  )
}

export default Balasana