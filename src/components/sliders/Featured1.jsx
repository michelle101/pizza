
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Featured1.css'

import choose1 from '../../img/choose1.png'
import choose2 from '../../img/choose2.png'
import choose3 from '../../img/choose3.png'

function Featured1() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed:4000,
      pauseOnHover: true
      };

  return (
    <div>
        <Slider {...settings}>
          <div className='boxes'>
            <img src= {choose1} alt='' />
            <h3>Lorem Ipsum Dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            <button>Order Now</button>
          </div>
          <div className='boxes'>
            <img src= {choose2} alt='' />
            <h3>Lorem Ipsum Dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            <button>Order Now</button>
          </div>
          <div className='boxes'>
            <img src= {choose3} alt='' />
            <h3>Lorem Ipsum Dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            <button>Order Now</button>
          </div>
          <div className='boxes'>
            <img src= {choose1} alt='' />
            <h3>Lorem Ipsum Dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            <button>Order Now</button>
          </div>
          <div className='boxes'>
            <img src= {choose2} alt='' />
            <h3>Lorem Ipsum Dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            <button>Order Now</button>
          </div>
          <div className='boxes'>
            <img src= {choose3} alt='' />
            <h3>Lorem Ipsum Dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            <button>Order Now</button>
          </div>
          
        </Slider>
      </div>
  )
}

export default Featured1