import React, { useEffect, useState } from 'react';

const RoomPage = () => {
    const [apis, setApi] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3056/v1/api/phong/getFullPhongs')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setApi(data); // Store the fetched data in state
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return <div>RoomPage</div>;
};

export default RoomPage;
