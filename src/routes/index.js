import AboutUsPage from '../Pages/AboutUspage/AboutUsPage';
import ContactPage from '../Pages/ContactPage/ContactPage';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import HomePage from '../Pages/HomePage/HomePage';
import RoomDetail from '../Pages/RoomDetailPage/RoomPage';
import RoomPage from '../Pages/RoomPage/RoomPage';

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
    },
    {
        path: '/contact',
        page: ContactPage,
        isShowHeader: true,
    },
    {
        path: '/room',
        page: RoomPage,
        isShowHeader: true,
    },
    {
        path: '/room/:id',
        page: RoomDetail,
        isShowHeader: true,
    },
    {
        path: '/about-us',
        page: AboutUsPage,
        isShowHeader: true,
    },
    {
        path: '*',
        page: ErrorPage,
    },
];
