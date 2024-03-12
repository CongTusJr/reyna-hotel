import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
    const sliders = [
        'https://khachsan3.migoda.vn/wp-content/uploads/2019/11/CortonaInn-AboutUs-Hero-5bf5845edceef.jpg',
        'https://khachsan3.migoda.vn/wp-content/uploads/2019/11/slider-2.jpg',
        'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/06/rosamia-da-nang-hotel-be-boi-ngoai-troi-1.jpg'
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        arrows: false // Ẩn các nút điều hướng
    };

    return (
        <div className='relative h-[2000px] bg-white' >
            <Slider {...settings} >
                {sliders.map((slider, index) => (
                    <div key={index} className='h-full'>
                        <img src={slider} alt={`slider-${index}`} className='md:h-[500px] md:hidden w-full object-cover' />
                    </div>
                ))}
            </Slider>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                <Slider {...settings}></Slider>
            </div>
            <div className='grid grid-cols-6 w-full h-24 bg-[#000] mt-[-5.6px]'>
                <div className='text-white font-bold'>
                    <h1 >
                    Đặt phòng ngay
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
