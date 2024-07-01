import Navb from "../Componennts/Navbar/Navbar"
import MyFooter from "../Componennts/footer/Footer"
import YogaInfo from "../Componennts/suryanamaskar/YogaInfo"
import { Helmet,HelmetProvider } from 'react-helmet-async';


const yogaInfoData = [
  {
    id: 1,
    title: "Advantages",
    points:
    "Holistic Exercise: Enhances flexibility strength and cardiovascular health in one sequence ,Mind-Body Connection: Promotes mental focus stress reduction and overall well-being."
  },
  {
    id: 2,
    title: "Do's",
    points:
    "Proper Alignment: Maintain correct posture for each pose to prevent injuries.,Regular Practice: Consistency is key practice daily for optimal physical and mental benefits."
      
  },
  {
    id: 3,
    title: "Don'ts",
    points:
      "Overexertion: Avoid pushing beyond your limits; listen to your body.,Incorrect Breathing: Ensure synchronized breathing with each movement; avoid holding breath."
  },
];

const imagesData = [
  "/suryasteps/Surya-1.jpg",
  "/suryasteps/Surya-2.jpg",
  "/suryasteps/Surya-3.jpg",
  "/suryasteps/Surya-4.jpg",
  "/suryasteps/Surya-5.jpg",
  "/suryasteps/Surya-6.jpg",
  "/suryasteps/Surya-7.jpg",
  "/suryasteps/Surya-8.jpg",
  "/suryasteps/Surya-9.jpg",
  "/suryasteps/Surya-10.jpg",
  "/suryasteps/Surya-11.jpg",
  "/suryasteps/Surya-12.jpg",
];



function SuryaNamaskar() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Surya Namaskar</title>
        <meta name="description" content="This pages provide you with the video and photos for suryanamaskar." />
      </Helmet>
      
      <Navb />
      <header className="text-center m-5 pt-5" >
        <h1 style={{fontSize:'60px'}}>Surya Namaskar</h1>
      </header>
      <YogaInfo yogaInfo={yogaInfoData} images={imagesData} video="/suryanamskar.mp4" />
      <MyFooter />
    </HelmetProvider>
  )
}

export default SuryaNamaskar