import React, { useState } from 'react';
import '../PartnerRegister/PartnerRegister.css';
import axios from "../../../config/axios";
import { BASE_BACKEND_URL } from '../../../config/constants';
import { withRouter } from "react-router-dom";
import { notification } from 'antd';

function PartnerRegister(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [restaurant_name, setRestaurant_name] = useState("");
    const [phone_number, setPhone_number] = useState("");
    const [email_address, setEmail_address] = useState("");
    const [price_range, setPrice_range] = useState("");
    const [location, setLocation] = useState("");
    const [partners_picture, setPartners_picture] = useState("");

    const usernameHandler = (e) => {
        setUsername(e.target.value);
    };
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    };
    const restaurant_nameHandler = (e) => {
        setRestaurant_name(e.target.value);
    };
    const phone_numberHandler = (e) => {
        setPhone_number(e.target.value);
    };
    const email_addressHandler = (e) => {
        setEmail_address(e.target.value);
    };
    const price_rangeHandler = (e) => {
        setPrice_range(e.target.value);
    };
    const locationHandler = (e) => {
        setLocation(e.target.value);
    };
    const partners_pictureHandler = (e) => {
        setPartners_picture(e.target.value);
    };

    const onFinish = () => {
        console.log("Comein");
        axios.post("/partners/register", { username, password, restaurant_name, email_address, phone_number, price_range, location, partners_picture })
            .then(res => {
                notification.success({
                    description: "Signup successfully"
                });
                props.history.push("/partner_login");
            })
            .catch(err => {
                console.log(err);
                notification.error({
                    description: "Something went wrong."
                });
            });
    };



    return (

        <div className="wrapper">
            <div className="title">
                Partner Form
            </div>
            <div className="form">
                <div className="inputfield">
                    <label>Restaurant Name</label>
                    <input type="text" className="input" value={restaurant_name} onChange={restaurant_nameHandler}></input>
                </div>
                <div className="inputfield">
                    <label>User Name</label>
                    <input type="text" className="input" value={username} onChange={usernameHandler}></input>
                </div>
                <div className="inputfield">
                    <label>Password</label>
                    <input type="password" className="input" value={password} onChange={passwordHandler}></input>
                </div>
                <div className="inputfield">
                    <label>Confirm Password</label>
                    <input type="password" className="input"></input>
                </div>
                <div className="inputfield">
                    <label>Email Address</label>
                    <input type="text" className="input" value={email_address} onChange={email_addressHandler}></input>
                </div>
                <div className="inputfield">
                    <label>Phone Number</label>
                    <input type="text" className="input" value={phone_number} onChange={phone_numberHandler}></input>
                </div>
                <div className="inputfield">
                    <label>Your Price range</label>
                    <div className="custom_select">
                        <select onChange={price_rangeHandler}>
                            <option value="">Select</option>
                            <option value="100 -200">100 - 200 บาท /จาน</option>
                            <option value="200 - 500">200 - 500 บาท /จาน</option>
                            <option value="500 - 1000">500 - 1000 บาท /จาน</option>
                            <option value="1000 บาทขึ้นไป">1000 บาทขึ้นไป /จาน</option>
                        </select>
                    </div>
                </div>
                <div className="inputfield">
                    <label>Your location</label>
                    <input type="text" className="input" value={location} onChange={locationHandler}></input>
                </div>
                <div className="inputfield">
                    <label>Your Restaurant Picture</label>
                    <input type="text" className="input" value={partners_picture} onChange={partners_pictureHandler}></input>
                </div>
                <div className="inputfield">
                    <input htmlType="submit" value="Register" className="btn" onClick={onFinish}></input>
                </div>
            </div>
        </div>
    )
}

export default withRouter(PartnerRegister);