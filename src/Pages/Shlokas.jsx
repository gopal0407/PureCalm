import Navb from "../Componennts/Navbar/Navbar"
import MyFooter from "../Componennts/footer/Footer"
import Shloka from "../Componennts/Shloka/Shloka"
import { Helmet,HelmetProvider } from 'react-helmet-async';

function Shlokas() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Shlokas</title>
        <meta name="description" content="This page provides you with the different Shlokas with three different languages." />
      </Helmet>
      
        <Navb />
        <Shloka />
        <MyFooter />
    </HelmetProvider>
  )
}

export default Shlokas