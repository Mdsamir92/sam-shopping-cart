import React, { useState, useEffect } from 'react'
import Category from '../../components/Category/Category'
import Homeproduct from '../../components/HomeProductCard/Homeproduct'
import Loader from '../../components/Loader/Loader'
import Track from '../../components/Track/Track'
// import myContext from '../../context/Context'
import "./Home.css"
import { Img } from './HomeImg'

function Home() {



  const [activeImg, setActiveImg] = useState(0);

  const handlePrevClick = () => {
    setActiveImg(!activeImg ? Img.length - 1 : activeImg - 1)
  }

  const handleNextClick = () => {
    setActiveImg((activeImg + 1) % Img.length)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [activeImg]);




  return (
    <>


      <div className="home" data-aos="flip-right" data-aos-duration="1000" data-aos-easing="linear">
        <button className='slider-l' onClick={handlePrevClick} >&lt;</button>
        <img src={Img[activeImg]} alt="wallpaper" />
        <button className='slider-r' onClick={handleNextClick} >&gt;</button>
      </div>
      <Category />

      <div className="home-banner py-3" data-aos="zoom-in" data-aos-duration="1200"  data-aos-easing="linear">
        <img className=" h-44 lg:h-full items-center" src="./images/homebanner.png" alt="" /><br />
      </div>


    <div className="apple-banner py-3">
        <img className=" h-44 lg:h-full items-center" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-ultra-202309_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1693861933617" alt="" data-aos="fade-down" data-aos-duration="1200"  data-aos-easing="linear"/>
        <img className=" h-44 lg:h-full items-center" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-15-pro-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692910040844" alt="" data-aos="fade-up" data-aos-duration="1400"  data-aos-easing="linear" />
      </div> 
      <Homeproduct />
         <div className="home-banner py-3" >
        <img className="lg:h-full items-center" src="https://rukminim2.flixcart.com/fk-p-flap/50/50/image/c9bf30814336e3ec.jpg?q=50" alt="" /><br />
      </div>
      <div className="home-banner py-3" >
        <img className=" h-44 lg:h-full items-center" src="./images/iphonebanner.png" alt="" /><br />
      </div>
  
      <div className="home-banner py-3" >
        <img className=" h-44 lg:h-full items-center" src="./images/mobile1.png" alt="" /><br />
      </div>
     
    </>


  )
}

export default Home
