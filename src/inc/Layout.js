import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active"  aria-current="page" to="/">Home</Link>
                            </li>
                           
                            <li className="nav-item">
                                 <Link className="nav-link"  aria-current="page" to="/product">Product</Link>
                            </li>
                            <li className="nav-item">
                                 <Link className="nav-link"  aria-current="page" to="/add_category">Add Category</Link>
                            </li>
                            <li className="nav-item">
                                 {/* <Link className="nav-link"  aria-current="page" to="/update_category">Edit Category</Link> */}
                            </li>
                            <li className="nav-item">
                                 <Link className="nav-link"  aria-current="page" to="/product_list">Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  aria-current="page" to="/cart">Cart</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  aria-current="page" to="/report">Report</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link"  aria-current="page" to="/signup_user">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  aria-current="page" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  aria-current="page" to="/logout">Logout</Link>
                            </li>
                        </ul>                      
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
