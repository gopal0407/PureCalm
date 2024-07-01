import Navb from '../Componennts/Navbar/Navbar';
import MyFooter from '../Componennts/footer/Footer';
import Hero from '../Componennts/hero/hero';
import Choose from '../Componennts/choose/Choose';
import Therepies from '../Componennts/therepies/therepies';
import Testonomials from '../Componennts/Testonomials/Testimonials';
import About from '../Componennts/about/About';
import { Helmet,HelmetProvider } from 'react-helmet-async';



function Home(){

  return (
    <HelmetProvider>
    <Helmet>
        <title> Find Inner Peace</title>
        <meta name="description" content=" Explore yoga, music & spiritual practices for mental well-being. Discover inspiring stories & guided resources.." />
      </Helmet>
      
      <Navb />
      <div>
      <Hero />
      <Choose />
      <Therepies />
      <Testonomials />
      <About />
      </div>
      <MyFooter />
    </HelmetProvider>
  );
}


export default Home;
