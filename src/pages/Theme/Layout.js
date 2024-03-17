import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Header />
            <Sidebar />
            <div class="bodypart">
                {/* <h2>This is body.</h2> */}
                <div class="content">
                <Outlet />
                </div>
               
            </div>
            <Footer />
        </div>);

}

export default Layout;