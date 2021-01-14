import React from 'react';
// import axios from 'axios';

function PartnerProfile({ partner: { username, email_address, phone_number, restaurant_name, price_range } }) {

    return (
        <div className="wrapper">
            <div className="title">
                Confirm Partner Register
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
