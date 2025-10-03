import React from 'react'
import HotelForm from './HotelForm'
// import { sliderImages } from '../assets/assets'
// import SimpleImageSlider from "react-simple-image-slider";

const Hero = () => {
  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/hotel_hero.png")] bg-no-repeat bg-cover bg-center h-screen'>
    {/* // <div className='flex flex-col items-start justify-center text-white'>
    //    <SimpleImageSlider 
    //     z-index='1'
    //     width='100vw'
    //     height='100vh'
    //     images={sliderImages}
    //     showBullets={true}
    //     showNavs={true}
    //     autoPlay={true}
    //     slideDuration={10000}
    //   > */}
      <p className='bg-[#49B9FF80]/50 px-3.5 py-1 rounded-full mt-20'>The Ultimate Hotel Experience</p>
      <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>Discover Your Perfect Getaway Destination</h1>
      <p>Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.</p>
      {/* Hotel Form */}
      <HotelForm />
      {/* // </SimpleImageSlider> */}
    </div>
  )
}

export default Hero
