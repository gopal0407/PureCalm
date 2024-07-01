import MusicCategory from "../Componennts/MusicCategory/MusicCategory"
import Navb from "../Componennts/Navbar/Navbar"
import MyFooter from "../Componennts/footer/Footer"
import { Helmet,HelmetProvider } from 'react-helmet-async';


function Music() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Music Therapies</title>
        <meta name="description" content="This page provide you with the different music therapies like the Instrumental,Natural etc." />
      </Helmet>
      
      <Navb />
      <MusicCategory />
      <MyFooter />
    </HelmetProvider>
  )
}

export default Music