import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Modal, Input } from 'antd';

function RoomDetail() {
    let { id } = useParams();
    const [api, setApi] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        birth: '',
        checkIn: '',
        checkOut: '',
    });

    useEffect(() => {
        fetch(`http://localhost:3056/v1/api/phong/getPhongId/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setApi(data.metadata[0]); // Store the fetched data in state
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [id]);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        // Use formData to send the data
        fetch(`http://localhost:3056/v1/api/user/create`, {
            method: 'POST', // Specify the POST method
            headers: {
                'Content-Type': 'application/json', // Assuming you're sending JSON data
            },
            body: JSON.stringify({
                TenKH: formData.name,
                Email: formData.email,
                Phone: formData.phone,
                MaPhong: id,
                NgaySinh: formData.birth,
                NgayThue: formData.checkIn,
                NgayTra: formData.checkOut,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log({ data });

                if ((data.metadata.mess = 'Thêm khách hàng thành công')) {
                    fetch(`http://localhost:3056/v1/api/phong/updatePhongId`, {
                        method: 'POST', // Specify the POST method
                        headers: {
                            'Content-Type': 'application/json', // Assuming you're sending JSON data
                        },
                        body: JSON.stringify({
                            id: id,
                            TinhTrang: 0,
                        }),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log(data);
                        });
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
    };

    return (
        <div className="container mx-auto mt-8">
            <Modal
                title="Basic Modal"
                visible={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                className="p-6"
                style={{ color: 'black' }}
            >
                <div className="mb-4">
                    <label htmlFor="name" className="block font-bold mb-1">
                        Name:
                    </label>
                    <Input
                        id="name"
                        placeholder="Enter your name"
                        className="w-full border border-gray-300 rounded-md p-2"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-bold mb-1">
                        Email:
                    </label>
                    <Input
                        id="email"
                        placeholder="Enter your email"
                        className="w-full border border-gray-300 rounded-md p-2"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block font-bold mb-1">
                        Phone:
                    </label>
                    <Input
                        type="text"
                        id="phone"
                        placeholder="Enter your number"
                        className="w-full border border-gray-300 rounded-md p-2"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="checkIn" className="block font-bold mb-1">
                        Ngày sinh:
                    </label>
                    <Input
                        type="date"
                        id="birthDate"
                        className="w-full border border-gray-300 rounded-md p-2"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="checkIn" className="block font-bold mb-1">
                        Check-in Date:
                    </label>
                    <Input
                        type="date"
                        id="checkIn"
                        className="w-full border border-gray-300 rounded-md p-2"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="checkOut" className="block font-bold mb-1">
                        Check-out Date:
                    </label>
                    <Input
                        type="date"
                        id="checkOut"
                        className="w-full border border-gray-300 rounded-md p-2"
                        onChange={handleChange}
                    />
                </div>
            </Modal>

            <div className="max-w-4xl mx-auto">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">{api.TenPhong}</h2>

                    <img
                        src={api.img}
                        alt="Room"
                        className="w-full rounded-md mb-4"
                    />

                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <span className="text-lg font-semibold text-gray-800">
                                Price:
                            </span>
                            <span className="ml-2 text-lg text-gray-600">
                                {api.GiaLPhong}
                            </span>
                        </div>
                        {api.TinhTrang === 1 ? (
                            <button
                                onClick={showModal}
                                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                                style={{
                                    backgroundColor: 'black',
                                }}
                            >
                                Book Now
                            </button>
                        ) : (
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                                style={{
                                    backgroundColor: 'gray',
                                }}
                            >
                                Book Now
                            </button>
                        )}
                    </div>
                    <p className="text-gray-700 mb-4">
                        Tận hưởng sự năng động của thành phố biển Nha Trang với
                        cửa kính rộng nhìn thấy toàn cảnh, một bên là thành phố
                        năng động – một bên là biển xanh nhẹ nhàng. Deluxe sea
                        view được thiết kế với nội thất gỗ sang trọng , hài hòa
                        với không gian thoáng đãng của phòng. Sẽ trở nên tuyệt
                        vời hơn khi thưởng thức cocktail và ngắm thành phố biển
                        từ bên trong. Rất thích hợp cho những cặp đôi muốn lựa
                        chọn cho mình 1 điểm đến lãng mạn và gần trung tâm thành
                        phố.
                    </p>

                    <table class="min-w-full divide-y divide-gray-200">
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr>
                                <td class="font-bold py-2">Giường đôi:</td>
                                <td class="py-2">2</td>
                            </tr>
                            <tr>
                                <td class="font-bold py-2">Diện tích phòng:</td>
                                <td class="py-2">100m</td>
                            </tr>
                            <tr>
                                <td class="font-bold py-2">Tivi:</td>
                                <td class="py-2">2</td>
                            </tr>
                            <tr>
                                <td class="font-bold py-2">Tủ lạnh:</td>
                                <td class="py-2">1</td>
                            </tr>
                            <tr>
                                <td class="font-bold py-2">Wifi miễn phí:</td>
                                <td class="py-2">có</td>
                            </tr>
                            <tr>
                                <td class="font-bold py-2">Nước miễn phí:</td>
                                <td class="py-2">free</td>
                            </tr>
                            <tr>
                                <td class="font-bold py-2">Bồn tắm:</td>
                                <td class="py-2">1</td>
                            </tr>
                            <tr>
                                <td class="font-bold py-2">Vòi tắm hoa sen:</td>
                                <td class="py-2">1</td>
                            </tr>
                            <tr>
                                <td class="font-bold py-2">
                                    Trang bị phòng tắm:
                                </td>
                                <td class="py-2">full</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default RoomDetail;
