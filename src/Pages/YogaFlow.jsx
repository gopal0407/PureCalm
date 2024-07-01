import MusicInfo from "../Componennts/MusicInfo/MusicInfo"
import Navb from "../Componennts/Navbar/Navbar"
import MyFooter from "../Componennts/footer/Footer"
import { Helmet,HelmetProvider } from 'react-helmet-async';

const playlistSrc = "https://open.spotify.com/embed/playlist/7feqserrlLnpnvo7uRa5Wn?utm_source=generator";


function YogaFlow() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Yoga Flow</title>
        <meta name="description" content="Provided you with Yoga Flow." />
      </Helmet>
      
      <Navb />
      <header className="mt-3">
        <h2>YogaFlow</h2>
      </header>
      <div className="mb-3">
      <MusicInfo playlistSrc={playlistSrc}/>
      </div>
      <MyFooter />
    </HelmetProvider>
  )
}

export default YogaFlow