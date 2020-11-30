import { notification } from 'antd';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import localStorage from "../../services/localStorage";
import PlateImg from '../../containers/uploadfile/dishelement.png';
import MyProfile from '../../containers/uploadfile/myprofile.png';
import '../BottomHeader/BottomHeader.css';



function BottomHeader() {
   const { change, setRole } = useContext(UserContext);
   const removeToken = () => {
      localStorage.clearToken();
      setRole("GUEST");
      notification.success({
         description: "Logout success."
      });
   }
   const [search, setSearch] = useState("");


   const searchHandler = (e) => {
      setSearch(e.target.value);
   };



   return (
      <div>
         {/* <ul>
            <li onClick={removeToken}><Link to="/">Logout</Link></li>
         </ul> */}

         <div className="outerFrameHeader" style={{ backgroundColor: "white" }}>
            <div className="outerRedPartner"></div>
            <div className="outerPlatePartner">
               <div className="innerPlatePartner"></div>
            </div>
            <div className="chanthong font-lobster" style={{ fontSize: "220%", top: "30px", left: "950px", color: "#D85B55", textShadow: "none" }}>Chanthong</div>

            <div>
               <img className="plateLeftPartner" src={PlateImg} alt="plate" style={{ left: "57px", top: "30px", zIndex: "1200", width: "50px", height: "50px" }}></img>
            </div>
            <label>Search:</label>
            <input placeholder="search" className="searchTab font-mitr" style={{ left: "60px", top: "40px", zIndex: "1100" }} value={search} onChange={searchHandler} />
            <div className="about"><Link to="/" style={{ color: "#DFCA95", fontFamily: 'Lobster' }}>About us</Link></div>
            <div className="special"><Link to="/" style={{ color: "#DFCA95", fontFamily: 'Lobster' }}>Special Deal</Link></div>
            {
               change ?
                  <div className="logout" onClick={removeToken}><Link to="/" style={{ color: "#DFCA95", fontFamily: 'Lobster' }}>Logout</Link></div> :
                  <div className="login" ><Link to="/login" style={{ color: "#DFCA95", fontFamily: 'Lobster' }}>Login</Link></div>
            }
            <div>
               <Link to="/"><img className="myprofile" src={MyProfile} alt="profile"></img></Link>
            </div>
         </div>
      </div>
   )
}

export default BottomHeader
