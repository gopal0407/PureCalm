import Navb from '../Componennts/Navbar/Navbar'
import YogaCard from '../Componennts/Yoga_card/YogaCard'
import Chat from '../Componennts/chatbot/Chat';
import MyFooter from '../Componennts/footer/Footer';
import { Helmet,HelmetProvider } from 'react-helmet-async';

function Yoga() {
  return (
    <HelmetProvider >
      <Helmet>
        <title>Yoga therapies</title>
        <meta name="description" content="Provided you with the multiple yoga therapies." />
      </Helmet>
      
      <Navb />
      <YogaCard />
      <MyFooter />
      <Chat />
    </HelmetProvider>
  )
}

export default Yoga