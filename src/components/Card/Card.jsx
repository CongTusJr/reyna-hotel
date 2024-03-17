import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Card({ id, imageSrc, quote, name, occupation, price }) {
    useEffect(() => {
        const handleMouseLeave = () => {
            const element = document.querySelector('.hover');
            if (element) {
                element.classList.remove('hover');
            }
        };

        const hoverElements = document.querySelectorAll('.hover');

        hoverElements.forEach((element) => {
            element.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            hoverElements.forEach((element) => {
                element.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <Link
            to={`/room/${id}`}
            className="block mx-10 mb-8 overflow-hidden w-310 max-w-full"
        >
            <figure className="snip1218 bg-blue-800 text-white font-raleway font-semibold relative shadow-md text-center">
                <div className="image border-b-4 border-blue-800 relative">
                    <img
                        src={imageSrc}
                        alt="sample"
                        className="w-full h-auto align-top"
                        style={{ width: '300px', height: '300px' }}
                    />
                    <p className="absolute top-1/2 w-full transform -translate-y-1/2 opacity-0 italic">
                        {quote}
                    </p>
                </div>
                <figcaption className="bg-white p-6 col-black">
                    <h3 className="mb-5 text-xl text-black font-extrabold">
                        Tên phòng: {name}
                    </h3>
                    <div className="flex flex-row mb-5">
                        <h5 className="mr-5 text-black">
                            {occupation === 1 ? (
                                <div style={{ color: 'green' }}>
                                    Phòng trống
                                </div>
                            ) : (
                                <div style={{ color: 'red' }}> Hết phòng</div>
                            )}
                        </h5>
                        <h5 className="text-black">Giá: {price}</h5>
                    </div>
                    <div className="icons">
                        <a href="#" className="inline-block mr-2">
                            <i className="ion-social-reddit-outline text-black"></i>
                        </a>
                        <a href="#" className="inline-block mr-2">
                            <i className="ion-social-twitter-outline text-black"></i>
                        </a>
                        <a href="#" className="inline-block">
                            <i className="ion-social-vimeo-outline text-black"></i>
                        </a>
                    </div>
                </figcaption>
            </figure>
        </Link>
    );
}

export default Card;
