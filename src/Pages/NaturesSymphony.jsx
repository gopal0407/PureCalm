import MusicInfo from "../Componennts/MusicInfo/MusicInfo"
import Navb from "../Componennts/Navbar/Navbar"
import MyFooter from "../Componennts/footer/Footer"
import { Helmet,HelmetProvider } from 'react-helmet-async';


const playlistSrc = "https://open.spotify.com/embed/playlist/6mtxRoNJe3omF8fyGpb4A9?utm_source=generator";

function NaturesSymphony() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Natures Symphony</title>
        <meta name="description" content="Provided with the Natural Music." />
      </Helmet>
      
      <Navb />
      <header className="mt-3">
        <h2>Natures Symphony</h2>
      </header>
      <div className="mb-3">
      <MusicInfo playlistSrc={playlistSrc}/>
      </div>
      <MyFooter />
    </HelmetProvider>
  )
}

export default NaturesSymphony