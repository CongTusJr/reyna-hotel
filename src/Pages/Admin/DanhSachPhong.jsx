import React from 'react'
import { Button, Input, Space } from 'antd';
import { DeleteFilled, EditFilled, PlusOutlined } from '@ant-design/icons';
// import { AudioOutlined } from '@ant-design/icons';
const { Search } = Input;

const phong_data = [
  {"id": 1, ten_phong: "Phòng 1", hinh_anh: "https://tubepfurniture.com/wp-content/uploads/2020/09/phong-mau-khach-san-go-cong-nghiep-01.jpg", thong_tin: "Thông tin về phòng 1", trang_thai: "Còn trống"},
  {"id": 2, ten_phong: "Phòng 2", hinh_anh: "phong2.jpg", thong_tin: "Thông tin về phòng 2", trang_thai: "Đã đặt"},
  {"id": 3, ten_phong: "Phòng 3", hinh_anh: "phong3.jpg", thong_tin: "Thông tin về phòng 3", trang_thai: "Còn trống"}
]

const DanhSachPhong = () => {
  return (
    <div className='w-full'>
      <div className='flex  items-center w-full p-5 shadow-md gap-4 '>
      <Input placeholder="Tên phòng" className='w-[300px]'/>
      <Button type="primary" className='bg-[#3ac7ff]'>Tìm kiếm</Button>
        
      </div>
      <div className="overflow-x-auto mt-4 shadow-md">
        <div className='float-end py-4 px-4'>
          <Button type="primary" className='flex bg-[#3ac7ff] items-center'><PlusOutlined /> Tạo mới</Button>
        </div>
        <table className="table-auto min-w-full">
  <thead className="bg-gray-200">
    <tr>
      <th className="px-4 py-2">STT</th>
      <th className="px-4 py-2">Tên phòng</th>
      <th className="px-4 py-2">Hình ảnh</th>
      <th className="px-4 py-2">Thông tin</th>
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
        <td className="px-4 py-2 text-center">{phong.thong_tin}</td>
        <td className="px-4 py-2 text-center">{phong.trang_thai}</td>
        <td className="px-4 py-2 text-center">
          <div className="flex gap-5 justify-center">
            <Button type="primary" className="flex bg-[#0958d9] items-center"><EditFilled /></Button>
            <Button type="primary" danger className="flex items-center"><DeleteFilled /></Button>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      </div>    
    </div>
  )
}

export default DanhSachPhong