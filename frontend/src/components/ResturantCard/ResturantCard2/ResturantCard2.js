import React, { useContext } from 'react';
import "./ResturantCard55.css";
import { BASE_BACKEND_URL } from '../../../config/constants'
import axios from '../../../config/axios';
import { notification } from 'antd';
import { useHistory } from 'react-router-dom';
import UserContext from '../../../context/UserContext';
import cardElement from '../../../containers/uploadfile/cardElement.png'

function ResturantCard2({ item }) {
   const history = useHistory();
   const { setReservePartner } = useContext(UserContext);

   const onReservePartner = () => {
      axios.get(`/partners/${item.id}`)
         .then(res => {

            notification.success({
               description: "go to reserve page"
            })
            console.log(res.data.targetPartner);
            setReservePartner(res.data.targetPartner);
            history.push(`/reserve/${res.data.targetPartner.id}`);
         })
         .catch(err => {
            console.log(err);
            notification.error({
               description: "cannot goto reserve page"
            })
         });
   }

   return (
      <div style={{ position: "relative", background: `url(${cardElement})`, backgroundSize: "contain", width: "219px", height: "308px", margin: "5px" }}>
         <div style={{ position: "absolute", top: "50px", left: "47px" }}>
            <img style={{ marginTop: "8px", borderRadius: "50%", width: "125px", height: "125px", position: "relative" }} alt="รูปภาพร้านอาหาร" src={`${BASE_BACKEND_URL}/${item.partners_picture}`} />
         </div>
         <div style={{ alignItems: "center", position: "absolute", display: "flex", flexDirection: "column", top: "185px", left: "32px", height: "40%", justifyContent: "center" }}>
            <h3>{item.restaurant_name}</h3>
            <div>Location: {item.phone_number}</div>
            <div>email: {item.email_address}</div>
            <div>จองแล้ว {item.id} ครี้ง</div>
            <button onClick={onReservePartner} className="btn">View More</button>
         </div>
      </div>
   )
}

export default ResturantCard2;

{/* <p>{card.Categories.map(
   (p, i) => {
      if (i === 0) {
         return `${p.type_food}`;
      };

      return `, ${p.type_food}`;
   })
}
</p> */}