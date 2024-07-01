import { Helmet ,HelmetProvider} from 'react-helmet-async';
import RCommunity from '../Componennts/recommended communities/RCommunity';
import Navb from '../Componennts/Navbar/Navbar';
import MyFooter from '../Componennts/footer/Footer';

function Community() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>My Page Title</title>
        <meta name="description" content="This is the meta description for My Page." />
      </Helmet>

      <Navb />
      <RCommunity className={"m-5"} />
      <MyFooter />
      

    </HelmetProvider>
  )
}

export default Community