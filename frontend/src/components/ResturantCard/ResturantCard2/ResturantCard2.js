import React from 'react';
import "./ResturantCard.css";
import { BASE_BACKEND_URL } from '../../../config/constants'

function ResturantCard2({ card }) {

   return (
      <div className="item">
         <h3>{card.restaurant_name}</h3>
         <div className="row">
            <img src={`${BASE_BACKEND_URL}/${card.partners_picture}`} />
         </div>
         <div className="info">
            <p>Location: {card.phone_number}</p>
            <p>email: {card.email_address}</p>
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
            <p>จองแล้ว {card.id} ครี้ง</p>
         </div>
         <div className="btn">
            <p>View More</p>
         </div>
      </div>
   )
}

export default ResturantCard2;
