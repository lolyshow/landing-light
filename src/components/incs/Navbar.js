import React from 'react';
import {Link} from "react-router-dom";
import img from "../images/admin.png";
function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-white bg-white">
            <div className="container-fluid">
                
                {/* <Link to = "/" class = "navbar-brand"> PhilsvibeTheMusician </Link> */}

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" style = {{paddingTop:30}} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-10" >
                        <li className="nav-item">
                            
                            <Link to = "/" className = "nav-link active" style={{color:'black',marginLeft:30}}> TRIPS </Link>
                        </li>
                        <li className="nav-item color-black">
                           
                            <Link to = "/about" className = "nav-link color-black" style={{color:'black',marginLeft:30}}> RECENTLY VIEWED </Link>
                        </li>

                        <li className="nav-item">
                           
                            <Link to = "/contact" className = "nav-link" style={{color:'black',marginLeft:30}}> BOOKINGS </Link>
                        </li>
                        <li className="nav-item">
                            <img src={img} className = "nav-link" height = "50" style={{marginLeft:30,marginRight:30,marginTop:-4}} alt = "admin"/>
                        </li> 
                    </ul>
                    
                </div>
            </div>
      </nav>
    );
}   

export default Navbar;


