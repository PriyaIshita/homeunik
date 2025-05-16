import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import Topbar from './Topbar';
import Navbar from './Navbar';
import Hero from './Hero';
import Apartment from './Apartment';
import Featuredproperty from './Featuredproperty';
import About from './About'
import Home from './Home';
import Sell from './Sell';
import Contact from './Contact';
//import Location from './Location';
import Site from './Site';
import Blog from './Blog';
import Bottom from './Bottom';

function App() {
  return (
    <>
    <Topbar />
    <Navbar />
    <Hero />
    <Apartment/>
    <Featuredproperty/>
    <About/>
    <Home/>
    <Sell/>
    <Contact/>
    <Site/>
    <Blog/>
    <Bottom/>
    </>
  );
}

export default App;
