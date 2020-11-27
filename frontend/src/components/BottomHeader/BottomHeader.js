import { notification } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import localStorage from "../../services/localStorage";

function BottomHeader({setRole}) {
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
