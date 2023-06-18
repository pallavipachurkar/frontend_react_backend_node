import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        // <div className="navbar-dark bg-dark navbar-dark shadow">
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-md-12">
        //                 <nav class='navbar navbar-expand-lg'>
        //                     <div class='container-fluid'></div>
        //                 </nav>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <Link to="/" class="navbar-brand">HeeruFood's</Link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/" class="nav-link active">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about" class="nav-link active">About</Link>
                        </li>
                        <li class="nav-item"> 
                            <Link to="/contact" class="nav-link active">Contact</Link>

                        </li>


                    </ul>

                </div>
            </div>
        </nav>

    );

}
export default Navbar;