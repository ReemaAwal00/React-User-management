import { Outlet,Link } from "react-router-dom";

const Sidebar = () => {
    return (<div class="sidebar">

        <ul class="sidebar-nav">
            <li>
                <Link to="/usermanagement">User Management</Link>
                {/* <a href="/user-management">User Management</a> */}
                </li>
                
            <li>
            <Link to="/faq">FAQ</Link></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/aboutus">About US</a></li>
        </ul>


    </div>
    );
}

export default Sidebar;
