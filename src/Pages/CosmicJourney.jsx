import MusicInfo from "../Componennts/MusicInfo/MusicInfo"
import Navb from "../Componennts/Navbar/Navbar"
import MyFooter from "../Componennts/footer/Footer"
import { Helmet,HelmetProvider } from 'react-helmet-async';


const playlistSrc = "https://open.spotify.com/embed/album/2QHUizL23KlzDINDmu8oHN?utm_source=generator";


function CosmicJourney() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Cosmic Journey</title>
        <meta name="description" content="Provided with the Eternal Cosmic Musics." />
      </Helmet>
      
      <Navb />
      <header className="mt-3">
        <h2>Cosmic Journey</h2>
      </header>
      <div className="mb-3">
      <MusicInfo playlistSrc={playlistSrc}/>
      </div>
      <MyFooter />
    </HelmetProvider>
  )
}

export default CosmicJourney