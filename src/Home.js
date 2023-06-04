import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import Header from "./Header";
import HowItWorks from "./HowItWorks"
import AboutUs from "./AboutUs"
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'
import {Route, Routes} from'react-router-dom'



function Home() {
  return(
    <>
    <Navbar></Navbar>
    <Header/>
    <HowItWorks/>
    <AboutUs/>
    <Services/>
    <Contact/>
    <Footer/>
    </>
  )  
}
export default Home;
