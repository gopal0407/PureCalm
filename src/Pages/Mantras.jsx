import Navb from "../Componennts/Navbar/Navbar"
import MyFooter from "../Componennts/footer/Footer"
import Mantra from "../Componennts/mantra/Mantra"
import { Helmet,HelmetProvider } from 'react-helmet-async';


function Mantras() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Mantras</title>
        <meta name="description" content="This page provides you with the different mantras." />
      </Helmet>
      
        <Navb />
        <Mantra />
        <MyFooter />
    </HelmetProvider>
  )
}

export default Mantras