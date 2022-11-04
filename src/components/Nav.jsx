import {useState} from "react";
import './Nav.css'
import {NavLink} from  'react-router-dom';
import logo from '../img/logo_black.png'
import phone from '../img/phone.png'

function Nav() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  let activeClassName="nav-active";
    return (
      <div className="nav">
            <div className="logo">
                <NavLink to='/pizza/'><img src={logo} alt="" /></NavLink>
            </div> 
            <div  className="phone">
              <div className="phone-img">
                <img src={phone} alt="phone" />
              </div>
              <div className="phone-num">
                <span className="delivery">EXPRESS DELIVERY</span><br />
                <span className="number">1800 258 888</span>
              </div>
              
            </div>
            <div className="navigation">
              <ul className={click ? "nav-menu active" : "nav-menu"} >
                <li className="nav-item"><NavLink to="/pizza/" className={({isActive})=> isActive && activeClassName} onClick={handleClick}> Home</NavLink></li>
                <li className="nav-item"><NavLink to="/pizza/Menu" className={({isActive})=> isActive && activeClassName} onClick={handleClick}> Menu</NavLink></li>
                <li className="nav-item"><NavLink to="/pizza/Ourstory" className={({isActive})=> isActive && activeClassName} onClick={handleClick}> Our Story</NavLink></li>
                <li className="nav-item"><NavLink to="/pizza/Contactus" className={({isActive})=> isActive && activeClassName} onClick={handleClick}> Contact Us</NavLink></li>
              </ul>
              <div className="nav-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
              </div>
            </div>
      </div>
    );
  }
  
  export default Nav;