import React from 'react';
import "./ResturantCard.css";

function ResturantCard({ card }) {
   return (
      <div className="item">
         <h3>{card.restaurant_name}</h3>
         <div className="row">
            <img src="https://images.unsplash.com/photo-1542803417-f2be3270347d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTB8fGRpc2h8ZW58MHx8MHw%3D&auto=format&fit=crop&w=200&q=60" alt="Bangpoo_resturant" />
         </div>
         <div className="info">
            <p>Location: {card.location}</p>
            <p>email: {card.email_address}</p>
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

export default ResturantCard
