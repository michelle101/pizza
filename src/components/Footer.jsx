import  logoYellow from '../img/logo_yellow.png'
import locationImg  from  '../img/location.png'
import email from  '../img/email.png'
import instagram from '../img/instagram.png'
import facebook from '../img/facebook.png'
import twitter from '../img/twitter.png'
import phone from '../img/phone_soc.png'

const Footer = () => {
    return ( 
        <div className="footer">
        <div className="ft-logo"><img src={logoYellow} /></div>
        <div>
          <div className="ft-para">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut</p>
          </div>
          <div className="ft-loc">
            <div className="loc-wrap">
              <div className="loc-img"><img src={locationImg} /></div>
              <div className="loc-info">Main Road, Building Name, Country</div>
            </div>
            <div className="loc-wrap">
              <div className="loc-img"><img src={email} /></div>
              <div className="loc-info">info2@companyname.com</div>
            </div>
          </div>
        </div>
          <div className="copyright-socmed">
            <div className="copyright">
              © Company Name 2020. All rights reserved.
            </div>
            <div className="socmed">
              <ul>
                <li><a href="#"><img src={instagram} alt="instagram"/></a></li>
                <li><a href="#"><img src={facebook} alt="facebook"/></a></li>
                <li><a href="#"><img src={twitter} alt="twitter"/></a></li>
                <li><a href="#"><img src={phone} alt="phone"/></a></li>
              </ul>
            </div>
          </div>
        
      </div>
     );
}
 
export default Footer;