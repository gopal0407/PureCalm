import MusicInfo from "../Componennts/MusicInfo/MusicInfo"
import Navb from "../Componennts/Navbar/Navbar"
import MyFooter from "../Componennts/footer/Footer"
import { Helmet,HelmetProvider } from 'react-helmet-async';

const playlistSrc = "https://open.spotify.com/embed/playlist/4TYoKNWGZPepouR1ukkCIz?utm_source=generator";


function InstrumentalOasis() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Instrumental Oasis</title>
        <meta name="description" content="Provided you with Instrumental Songs." />
      </Helmet>
      
      <Navb />
      <header className="mt-3">
        <h2>Instrumental Oasis</h2>
      </header>
      <div className="mb-3">
      <MusicInfo playlistSrc={playlistSrc}/>
      </div>
      <MyFooter />
    </HelmetProvider>
  )
}

export default InstrumentalOasis