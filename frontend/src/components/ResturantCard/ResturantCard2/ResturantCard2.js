import React, { useContext } from 'react';
import "./ResturantCard2.css";
import { BASE_BACKEND_URL } from '../../../config/constants'
import axios from '../../../config/axios';
import { notification } from 'antd';
import { useHistory } from 'react-router-dom';
import UserContext from '../../../context/UserContext';

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
      <div className="item">
         <h3>{item.restaurant_name}</h3>
         <div className="row">
            <img alt="รูปภาพร้านอาหาร" src={`${BASE_BACKEND_URL}/${item.partners_picture}`} />
         </div>
         <div className="info">
            <p>Location: {item.phone_number}</p>
            <p>email: {item.email_address}</p>
            {/* <p>{card.Categories.map(
               (p, i) => {
                  if (i === 0) {
                     return `${p.type_food}`;
                  };

                  return `, ${p.type_food}`;
               })
            }
            </p> */}
         </div>
         <div className="info">
            <p>จองแล้ว {item.id} ครี้งครับ</p>
         </div>
         <div onClick={onReservePartner} className="btn">
            <p>View More</p>
         </div>
      </div>
   )
}

export default ResturantCard2;
