import React, { useState } from 'react';
import Slider from "react-slick";
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'react-datepicker/dist/react-datepicker.css';
import Button from 'react-bootstrap/Button';

const HomePage = () => {
    
    const [selectedDateIn, setSelectedDateIn] = useState(null);
    const [selectedDateOut, setSelectedDateOut] = useState(null);
    const handleChangeIn = (date) => {
        setSelectedDateIn(date);
    };const handleChangeOut = (date) => {
        setSelectedDateOut(date);
    };
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
                <div className='text-white font-bold py-[17px] px-[15px] text-center'>
                    <h1 className='text-2xl'>
                    Đặt phòng ngay
                    </h1>
                    <span>Ưu đãi giá thấp nhất</span>
                </div>
                <div className='justify-center px-[15px] bg-goldlg '>
                    <Form.Select aria-label="Default select example" className='text-center h-10 w-[224px] mt-[25px]' >
                        <option>Người lớn</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">3</option>
                        <option value="3">3</option>
                        <option value="3">3</option>
                    </Form.Select>
                </div>
                <div className='justify-center px-[15px] bg-goldlg '>
                    <DatePicker
                        selected={selectedDateIn}
                        onChange={handleChangeIn}
                        dateFormat="dd/MM/yyyy" // Định dạng ngày tháng
                        placeholderText="Ngày đến"
                        className='text-center h-10 w-[224px] mt-[25px]'
                    />
                </div>
                <div className='justify-center px-[15px] bg-goldlg '>
                    <DatePicker
                        selected={selectedDateOut}
                        onChange={handleChangeOut}
                        dateFormat="dd/MM/yyyy" // Định dạng ngày tháng
                        placeholderText="Ngày đi"
                        className='text-center h-10 w-[224px] mt-[25px]'
                    />
                </div>
                <div className='justify-center px-[15px] bg-goldlg'>
                    <Form.Select aria-label="Default select example" className='text-center h-10 w-[224px] mt-[25px]' >
                        <option>Trẻ em</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">3</option>
                        <option value="3">3</option>
                        <option value="3">3</option>
                    </Form.Select>
                </div>
                <div className='justify-center px-[15px] bg-goldlg text-white items-center text-center '>
                    <Button variant="outline-secondary" className='bg-[#755727] h-[96px] px-12'>KIỂM TRA</Button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
