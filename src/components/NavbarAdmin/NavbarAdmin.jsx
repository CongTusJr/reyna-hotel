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
        name: 'Quản lý phòng',
        link: '/admin/quan-ly-phong'
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
