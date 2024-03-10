import ErrorCode from "../Componennts/ErrorCode/ErrorCode";
import Navb from "../Componennts/Navbar/Navbar";
import MyFooter from "../Componennts/footer/Footer";
import Chat from '../Componennts/chatbot/Chat';
import { Helmet,HelmetProvider } from 'react-helmet-async';


const Error404 = () => {
  return (
    <HelmetProvider>
    <Helmet>
        <title>My Page Title</title>
        <meta name="description" content="This is the meta description for My Page." />
      </Helmet>
      
    <Navb />
    <ErrorCode />
    <MyFooter />
    <Chat />
    </HelmetProvider>
  );
};

export default Error404;
