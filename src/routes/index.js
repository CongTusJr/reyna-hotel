import AboutUsPage from "../Pages/AboutUspage/AboutUsPage";
import QLKH from "../Pages/Admin/QLKH";
import QLNV from "../Pages/Admin/QLNV/QLNV";
import ContactPage from "../Pages/ContactPage/ContactPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import RoomPage from "../Pages/RoomPage/RoomPage";
import NavbarAdmin from "../components/NavbarAdmin/NavbarAdmin";
import DanhSachPhong from "../Pages/Admin/DanhSachPhong";
import DanhSachDatPhong from "../Pages/Admin/DanhSachDatPhong";

export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/contact",
    page: ContactPage,
    isShowHeader: true,
  },
  {
    path: "/room",
    page: RoomPage,
    isShowHeader: true,
  },
  {
    path: "/about-us",
    page: AboutUsPage,
    isShowHeader: true,
  },

  {
    path: "*",
    page: ErrorPage,
  },
];
export const routes1 = [
  {
    path: "/admin",
    page: NavbarAdmin,
  },
  {
    path: "/admin/quan-ly-nhan-vien",
    page: QLNV,
    isShowHeader: true,
  },
  {
    path: "/admin/quan-ly-khach-hang",
    page: QLKH,
    isShowHeader: true,
  },

  {
    path: "/admin/danh-sach-phong",
    page: DanhSachPhong,
    isShowHeader: true,
  },
  {
    path: "/admin/danh-sach-dat-phong",
    page: DanhSachDatPhong,
    isShowHeader: true,
  },
];
