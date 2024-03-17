import React from 'react'
import { Button, Dropdown, Input, Space } from 'antd';
import { CaretDownOutlined, CheckSquareFilled, DeleteFilled, DownOutlined, EditFilled, PlusOutlined, UserOutlined } from '@ant-design/icons';
// import { AudioOutlined } from '@ant-design/icons';
// const { Search } = Input;
const items = [
    {
        label: 'Delete',
        key: '0',
        icon: <DeleteFilled />,
        danger:true
      },
    {
      label: 'Tiếp nhận',
      key: '1',
      icon: <CheckSquareFilled />,
    },
    {
      label: 'Xác nhận',
      key: '2',
      icon: <CheckSquareFilled />,
    },
    {
      label: 'Đã thanh toán',
      key: '3',
      icon: <CheckSquareFilled />,
    //   danger: true,
    },
    {
      label: 'Đã trả phòng',
      key: '4',
      icon: <CheckSquareFilled />,
    //   danger: true,
    //   disabled: true,
    },
  ];
  const menuProps = {
    items,
    // onClick: handleMenuClick,
  };
const phong_data = [
  {"id": 1, ten_phong: "Phòng 1", tt_kh: "https://tubepfurniture.com/wp-content/uploads/2020/09/phong-mau-khach-san-go-cong-nghiep-01.jpg", thanh_toan: "Thanh toán trực tiếp", trang_thai: "Tiếp nhận"},
  {"id": 2, ten_phong: "Phòng 2", tt_kh: "phong2.jpg", thanh_toan: "Thanh toán online", trang_thai: "Đã thanh toán"},
  {"id": 3, ten_phong: "Phòng 3", tt_kh: "phong3.jpg", thanh_toan: "Thông tin về phòng 3", trang_thai: "Đã trả phòng"}
]

const DanhSachDatPhong = () => {
  return (
    <div className='w-full'>
      <div className='grid grid-cols-3 justify-center items-center w-full p-5 shadow-md gap-4 '>
        <div className="col-span-1">
            <Input placeholder="Tên phòng" />
        </div>
        <div className="col-span-1">
            <Input placeholder="Tên khách hàng" />
        </div>
        <div className="col-span-1">
            <Input placeholder="Email" />
        </div>
        <div className="col-span-1">
            <Input placeholder="Số điện thoại" />
        </div>
        <div className="col-span-1 flex">
            <Button type="primary" className='bg-[#3ac7ff]'>Tìm kiếm</Button>
        </div>
    </div>

      <div className="overflow-x-auto mt-4 shadow-md pt-4">
        <table className="table-auto min-w-full">
            <thead className="bg-[#c4d0e49f]">
                <tr>
                <th className="px-4 py-2">STT</th>
                <th className="px-4 py-2">Tên phòng</th>
                <th className="px-4 py-2">Thông tin khách hàng</th>
                <th className="px-4 py-2">Dữ liệu phòng</th>
                <th className="px-4 py-2">Thanh toán</th>
                <th className="px-4 py-2">Trạng thái</th>
                <th className="px-4 py-2">Hành động</th>
                </tr>
            </thead>
            <tbody className="bg-white">
                {phong_data.map((phong) => (
                <tr key={phong.id} className="shadow">
                    <td className="px-4 py-2 text-center">{phong.id}</td>
                    <td className="px-4 py-2 text-center">{phong.ten_phong}</td>
                    <td className="flex px-4 py-2 justify-center"><img src={phong.hinh_anh} alt="" className="w-[100px]" /></td>
                    <td className="px-4 py-2 text-center">{phong.thanh_toan}</td>
                    <td className="px-4 py-2 text-center">
                        {/* <Button className='bg-black' type="primary" disabled> </Button> */}
                        <div className='bg-goldlg'>
                        {phong.trang_thai}
                        </div>
                    </td>
                    <td className="px-4 py-2 text-center">
                    <div className="flex gap-5 justify-center">
                        <Dropdown menu={menuProps}>
                            <Button>
                                <Space>
                                Action
                                <CaretDownOutlined />
                                </Space>
                            </Button>
                        </Dropdown>
                    </div>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
      </div>    
      <div className='flex justify-center py-6  bottom-0'>
        <Button  danger>Xem thêm</Button>
      </div>
    </div>
  )
}

export default DanhSachDatPhong