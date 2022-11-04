import {useState, useEffect} from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Upcoming.css'

import choose1 from '../../img/choose1.png'
import choose2 from '../../img/choose2.png'
import choose3 from '../../img/choose3.png'

function Upcoming() {
    const [nav1,setNav1]= useState(null);
    const [nav2,setNav2]= useState(null);
    const [slider1, setSlider1]=useState(null);
    const [slider2, setSlider2]=useState(null);

    useEffect(()=>{
      setNav1(slider1);
      setNav2(slider2);
    });

    const settingsMain = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    };
  
    const settingsThumbs = {
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: true,
      className: "center",
      swipeToSlide: true,
      focusOnSelect: true,
      centerPadding: '10px',
      autoplay: true,
      speed:500,
      autoplaySpeed: 5500,
      cssEase: "linear"
    };
  
    const slidesData = [
      {
        id: 1,
        image: 'https://raw.githubusercontent.com/michelle101/pizza/gh-pages/static/media/slide1.jpg'
      }, {
        id: 2,
        image: 'https://raw.githubusercontent.com/michelle101/pizza/gh-pages/static/media/slide2.jpg'
      }, {
        id: 3,
        image: 'https://raw.githubusercontent.com/michelle101/pizza/gh-pages/static/media/slide3.jpg'
      }, {
        id: 4,
        image: 'https://raw.githubusercontent.com/michelle101/pizza/gh-pages/static/media/slide4.jpg'
      }, {
        id: 5,
        image: 'https://raw.githubusercontent.com/michelle101/pizza/gh-pages/static/media/slide5.jpg'
      }, {
        id: 6,
        image: 'https://raw.githubusercontent.com/michelle101/pizza/gh-pages/static/media/slide6.jpg'
      },
    ];

return (
    <div className='slider2'>
      
        <div className="thumbnail-slider-wrap">
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={slider => (setSlider2(slider))}>

            {slidesData.map((slide) =>

              <div className="slick-slide" key={slide.id}>
                <img className="slick-slide-image" src={slide.image} />
              </div>

            )}

          </Slider>
        </div> 
        <div className="dark-space"></div>
        <div className='big-image'>
        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={slider => (setSlider1(slider))}
        >

          {slidesData.map((slide) =>

            <div className="slick-slide slick-slide-big" key={slide.id}>
              <img className="slick-slide-image" src={slide.image} />
            </div>

          )}

        </Slider>
      </div> 
    </div>
  )
}

export default Upcoming