import React, { useContext } from 'react';
import { BASE_BACKEND_URL } from '../../config/constants'
import axios from '../../config/axios';
import { notification } from 'antd';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';

function ResturantCard({ item }) {
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
        <div style={{ width: "320px", height: "450px", position: "relative", overflow: "hidden" }}>
            <h3>{item.restaurant_name}</h3>
            <div style={{ width: "320px", height: "175px", backgroundColor: "#22cacf", zIndex: 3, position: "absolute", top: 0, left: 0 }}></div>
            <div style={{ width: "160px", height: "160px", borderRadius: "50%", backgroundColor: "#22cacf", zIndex: 2, position: "absolute", left: -80, top: 95 }}></div>
            <div style={{ width: "160px", height: "160px", borderRadius: "50%", backgroundColor: "#22cacf", zIndex: 2, position: "absolute", right: -80, top: 95 }}></div>
            <div className="row" style={{ width: "190px", height: "190px", borderRadius: "50%", backgroundColor: "#dfca95", zIndex: 4, position: "absolute", top: 80, left: 65 }}>
                <img src={`${BASE_BACKEND_URL}/${item.partners_picture}`} alt="รูปร้านอาหาร" />
            </div>
            <div style={{ width: "320px", height: "275px", backgroundColor: '#d95b55', zIndex: 1, position: "absolute", bottom: 0, left: 0 }}>
                <div style={{ marginTop: "150px" }}>
                    <div className="info" style={{ right: "20px", display: "flex" }}>
                        <p>Location: {item.phone_number}</p>
                        <br />
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
                        <p>จองแล้ว {item.id} ครี้ง</p>
                    </div>
                    <button onClick={onReservePartner} className="btn">
                        View More
                    </button>
                </div>
            </div>
            {/* <img src={} alt="pictureprofile"></img> */}
        </div>
    )
}

export default ResturantCard
