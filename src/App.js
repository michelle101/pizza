
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import {BrowserRouter, NavLink,Routes,Route} from  'react-router-dom';

import  './fonts/Sketch_Block.ttf';
import './fonts/Montserrat-Regular.ttf';
import './fonts/Montserrat-Bold.ttf';
import Footer from './components/Footer';
import Menu from './Menu';
import Ourstory from './components/Ourstory';
import Contactus from './components/Contactus';
function App() {
  
  return (
    <BrowserRouter>
    <div className='AppWrapper'>
      <><Nav /></>
      <>
        <Routes>
          <Route path="/pizza/" element={<Home />} />
          <Route path="/pizza/Menu" element={<Menu />} />
          <Route path="/pizza/Ourstory" element={<Ourstory />} />
          <Route path="/pizza/Contactus" element={<Contactus />} />
        </Routes>
      </>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
