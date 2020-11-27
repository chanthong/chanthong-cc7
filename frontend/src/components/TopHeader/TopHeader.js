import React from 'react';
import { Link } from 'react-router-dom';
import '../../config/roles';
import bg from "./Chanthong7_1-Recovered.png"
import '../TopHeader/TopHeader.css'



function TopHeader() {
   return (
      <div className="home-body">
         <div className="bg_img">
            {/* <img src={bg} alt="background"></img> */}
            <ul>
               <li><Link to="/register">Register</Link></li>
               <li><Link to="/login">Login</Link></li>
            </ul>
         </div>
      </div>

   )
}

export default TopHeader
