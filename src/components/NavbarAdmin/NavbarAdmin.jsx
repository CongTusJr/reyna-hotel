import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const Links = [
    {
        name: 'Quản lý nhân viên',
        link: '/admin/quan-ly-nhan-vien'
    },
    {
        name: 'Danh sách phòng',
        link: '/admin/danh-sach-phong'
    },
    {
        name: 'Danh sách đặt phòng',
        link: '/admin/danh-sach-dat-phong'
    },
    {
        name: 'Quản lý khách hàng',
        link: '/admin/quan-ly-khach-hang'
    },
    {
        name: 'Quản lý nhân viên',
        link: '/admin/quan-ly-nhan-vien'
    },
    {
        name: 'Quản lý nhân viên',
        link: '/admin/quan-ly-nhan-vien'
    },
    {
        name: 'Quản lý nhân viên',
        link: '/admin/quan-ly-nhan-vien'
    },
    {
        name: 'Quản lý nhân viên',
        link: '/admin/quan-ly-nhan-vien'
    },
];

const NavbarAdmin = () => {
    return (
        <div>
            
            <Sider
            theme="dark"
            width={200}
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,

            }}
        >
        <div className='flex justify-center'>
            <img src="https://www.logolynx.com/images/logolynx/23/23938578fb8d88c02bc59906d12230f3.png" alt="" className='w-[100px] ' />
        </div>
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                {Links.map((link, index) => (
                    <Menu.Item key={index + 1}>
                        <Link to={link.link}>{link.name}</Link>
                    </Menu.Item>
                ))}
            </Menu>
        </Sider>
        </div>
    );
};

export default NavbarAdmin;
