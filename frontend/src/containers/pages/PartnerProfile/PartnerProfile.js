import React from 'react';
// import axios from 'axios';

function PartnerProfile({ partner: { username, email_address, phone_number, restaurant_name, price_range } }) {

    // const fetchPartner = async () => {
    //     const res = await axios.get("http://localhost:5555/partners/:id");
    //     setPartner(res.data.targetPartner);
    //     console.log(res)
    // }

    // useEffect(() => {
    //     fetchPartner();
    // }, []);

    return (
        <div className="wrapper">
            <div className="title">
                Partner Form
            </div>
            <div className="form">
                <div className="inputfield">
                    <div>Restaurant Name: {restaurant_name}</div>
                </div>
                <div className="inputfield">
                    <div>User Name: {username}</div>
                </div>
                <div className="inputfield">
                    <div>Email Address: {email_address}</div>
                </div>
                <div className="inputfield">
                    <div>Phone Number: {phone_number}</div>
                </div>
                <div className="inputfield">
                    <div>Price Range: {price_range}</div>
                </div>
            </div>
        </div>
    )
};

export default PartnerProfile
