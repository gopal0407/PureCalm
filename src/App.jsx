import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Home from './Pages/Home';
import Therepy from './Pages/Therepies';
import Yoga from './Pages/Yoga';
import Spiritual from './Pages/Spiritual';
import Shlokas from './Pages/Shlokas';
import Music from './Pages/Music';
import NaturesSymphony from './Pages/NaturesSymphony';
import YogaFlow from './Pages/YogaFlow';
import InstrumentalOasis from './Pages/InstrumentalOasis';
import CosmicJourney from './Pages/CosmicJourney';
import Community from './Pages/Community';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Error404 from './Pages/Error404';
import Mantras from './Pages/Mantras';
import SuryaNamaskar from './Pages/SuryaNamaskar';
import Vrksasana from './Pages/Vrksasana';
import AdhoMukhaSvanasana from './Pages/AdhoMukhaSvanasana';
import VirabhadrasanaII from './Pages/VirabhadrasanaII';
import Balasana from './Pages/Balasana';
import Profile from './Pages/Profile';
import EditProfile from './Pages/EditProfile';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import './App.css';
import { useEffect, useState } from "react";
import { auth } from "./firebase";


function App() {

  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <LocomotiveScrollProvider>
      <div data-scroll-container>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home name={userName} /> } />
            <Route path="/home" element={<Home name={userName} />} />
            <Route path="/therepies" element={<Therepy />} />
            <Route path="/yoga" element={<Yoga />} />
            <Route path="/yoga/surya-namaskar" element={<SuryaNamaskar />} />
            <Route path="/yoga/vrksasana" element={<Vrksasana />} />
            <Route path="/yoga/adho-mukha-svanasana" element={<AdhoMukhaSvanasana />} />
            <Route path="/yoga/virabhadrasana-II" element={<VirabhadrasanaII />} />
            <Route path="/yoga/balasana" element={<Balasana />} />
            <Route path="/spiritual" element={<Spiritual />} />
            <Route path="/spiritual/shlokas" element={<Shlokas />} />
            <Route path="/spiritual/mantras" element={<Mantras />} />
            <Route path="/music" element={<Music />} />
            <Route path="/music/NaturesSymphony" element={<NaturesSymphony />} />
            <Route path="/music/CosmicJourney" element={<CosmicJourney />} />
            <Route path="/music/InstrumentalOasis" element={<InstrumentalOasis />} />
            <Route path="/music/YogaFlow" element={<YogaFlow />} />
            <Route path="/community" element={<Community />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/404" element={<Error404 />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />

            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </LocomotiveScrollProvider>
  );
}

export default App;
