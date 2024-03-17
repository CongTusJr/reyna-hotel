import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';

const BookedRoom = () => {
    const [apis, setApi] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3056/v1/api/phong/getFullPhongs')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setApi(data.metadata); // Store the fetched data in state
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="mt-100">
            <div>
                <div className="flex flex-row mt-100px w-300">
                    {apis.map((api) => (
                        <Card
                            id={api.MaPhong}
                            imageSrc={api.img}
                            quote={api.mota}
                            name={api.TenPhong}
                            occupation={api.TinhTrang}
                            price={api.GiaLPhong}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookedRoom;
