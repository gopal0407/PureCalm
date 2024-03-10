import Navb from "../Componennts/Navbar/Navbar"
import MyFooter from "../Componennts/footer/Footer"
import Therepies from "../Componennts/therepies/therepies" 
import Chat from '../Componennts/chatbot/Chat';
import Slider from "../Componennts/Slider/Slider"
import { Helmet ,HelmetProvider} from 'react-helmet-async';

function Therepy() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>My Page Title</title>
        <meta name="description" content="This is the meta description for My Page." />
      </Helmet>
      
      <Navb />
      <Slider />
      <Therepies />
      <MyFooter />
      <Chat />
    </HelmetProvider>
  )
}

export default Therepy