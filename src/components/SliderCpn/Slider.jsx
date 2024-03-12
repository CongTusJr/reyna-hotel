// import {Image} from 'antd'
import React from 'react'
import { Image } from 'react-bootstrap';
import Slider from 'react-slick';

const SliderComponent = ({arrImages}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000
      };
  return (
    <Slider {...settings}>
        {arrImages.map((image)=>{
            return(
                <Image src={image} alt='slider' key={image} className='w-full h-[600px]'/>
            )
        })}

    </Slider>
  )
}

export default SliderComponent