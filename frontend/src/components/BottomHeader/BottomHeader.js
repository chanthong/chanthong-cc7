import { notification } from 'antd';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import localStorage from "../../services/localStorage";

function BottomHeader() {
   const { setRole } = useContext(UserContext);
   const removeToken = () => {
      localStorage.clearToken();
      setRole("GUEST");
      notification.success({
         description: "Logout success."
      });
   }

   return (
      <div>
         <ul>
            <li onClick={removeToken}><Link to="/">Logout</Link></li>
         </ul>
      </div>
   )
}

export default BottomHeader
