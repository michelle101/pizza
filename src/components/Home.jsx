import './Home.css'

import leaf1 from '../img/leaf1.png'
import leaf2 from '../img/leaf2.png'
import pasta from '../img/pasta.png'
import ribbonPasta from  '../img/ribbon-pasta.png'
import tomato  from '../img/tomato.png'
import plate1 from '../img/plate1.png'
import Featured1 from './sliders/Featured1'
import Upcoming from './sliders/Upcoming'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <div className="bg-yellow"></div>
        <div className="leaf1"><img src={leaf1} alt="" /></div>
        <div className="hungry">Are you hungry?</div>
        <div className="leaf2"><img src={leaf2} alt=""  /></div>
        <div className="pasta"><img src={pasta} alt=""  /></div>
        <div className="ribbonPasta"><img src={ribbonPasta} alt=""  /></div>   
        <div className="tomato"><img src={tomato} alt=""  /></div>
        <div className="plate1"><img src={plate1} alt=""  /></div> 
        <div className="main">don't wait</div>
        <div className="sub-main">
          <div>order your food now</div>
          <div></div>
        </div>
        <div className="happy-hour">
          <div className="hp-left">this monday happy hour</div>
          <div className="hp-right">1+1=3</div>
        </div>
        <div className="order-now"><button>order now</button></div>
      </div>

      <div className="short-menu">
        <h2>choose & enjoy</h2>
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
        <div className="stripes"></div>
        <div className="featured-slides">
          <Featured1 />
        </div>
      </div>

      <div className='upcoming-event'>
          <h3>discover</h3>
          <h2>upcoming events</h2>
          <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
        <Upcoming />
      </div>

      <div className="advertisements">
        <Link to='/'>
        <div className="ads ads1">
          <h5>try it today</h5>
          <h4>most popular pasta</h4>
        </div>
        </Link>
        <Link to='/'>
        <div className="ads ads2">
          <h5>try it today</h5>
          <h4>more fun more taste</h4>
        </div>
        </Link>
        <Link to='/'>
        <div className="ads ads3">
          <h5>try it today</h5>
          <h4>fresh & chili</h4>
        </div>
        </Link>
      </div>

      <div className="reservations">
        <h3>reservation</h3>
        <h2>book your table</h2>
        <form>
          <input type="text" value='Name' name="user_name" />
          <input type="text" value='Email' name="user_email" />
          <input type="text" value='Date' name="user_date" />
          <input type="text" value='Time' name="user_time" />
          <input type="text" value='People' name="user_people" />
          <input type="submit" className='sbmt-btn' value="FIND A TABLE" />
        </form>
      </div>
      

    </div>
  );
}

export default Home;
