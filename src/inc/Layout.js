import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarText">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/login">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/add_category">Category</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/product">Product</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link"  aria-current="page" to="/business_signup_user">Business signup user</Link>
                            </li>
                           
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/product_list">Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/business_details">Business Details</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/report">Report</Link>
                            </li>

                            {/* <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/signup_user">Signup</Link>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/login">Login</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/logout">Logout</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="order-lg-last col-lg-5 col-sm-8 col-8">
                        <div className="d-flex float-end" style={{ color: '#fff' }}>
                            {/* <a href="/signup_user" className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank">
                                <i className="fas fa-user-alt m-1 me-md-2"></i>
                                <Link className="nav-link" aria-current="page" to="/signup_user">Signup</Link>

                                <p className="d-none d-md-block mb-0">Sign in</p>
                            </a> */}
                            {/* <a href="https://github.com/mdbootstrap/bootstrap-material-design" className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank">
                                <i className="fas fa-heart m-1 me-md-2"></i>
                                <p className="d-none d-md-block mb-0">Wishlist</p>
                            </a>
                            <a href="/cart" className="border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank">
                                <i className="fas fa-shopping-cart m-1 me-md-2"></i>
                                <Link className="nav-link" aria-current="page" to="/cart">My Cart</Link>

                                <p className="d-none d-md-block mb-0">My cart</p>
                            </a> */}
                        </div>
                    </div>
                    {/* <div className="pe-3">

                        <svg style={{ color: '#fff' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                        </svg>

                    </div>

                    <div className="pe-3">
                        <svg style={{ color: '#fff' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                    </div> */}
                </div>

            </nav>


            <Outlet />
        </>
    )
};

export default Layout;
