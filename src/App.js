import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import About from './pages/About';
import ContactPage from "./pages/ContactPage"
import ServicePage from './pages/ServicePage';
import Error from './pages/Error';
import {Route, Routes} from'react-router-dom'




function App() {
  return(
    <>
    <Routes>
      <Route exact path = "/" Component={Home}/>
      <Route exact path = "/services" Component={ServicePage}/>
      <Route exact path = "/about" Component={About}/>
      {/* <Route exact path = "/working" Component={HowItWorks}/> */}
      <Route exact path = "/contact" Component={ContactPage}/>
      <Route exact path = "*" Component={Error}/>
    </Routes>
    </>
  )  
}
export default App;
