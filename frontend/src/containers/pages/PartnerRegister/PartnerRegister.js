import React, { useState } from 'react';
import '../Register/Register.css';
import axios from "../../../config/axios";
import { BASE_BACKEND_URL } from '../../../config/constants';
import { withRouter } from "react-router-dom";
import { notification } from 'antd';

function Register(props) {
    const [fileName, setFileName] = useState("");


    const onFinish = ({ username, password, name, lname, email, phone_number, gender }) => {
        axios.post("/users/register", { username, password, name, lname, email, phone_number, gender })
            .then(res => {
                notification.success({
                    description: "Signup successfully"
                });
                props.history.push("/");
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
                Registration Form
            </div>
            <div className="form">
                <div className="inputfield">
                    <label>First Name</label>
                    <input type="text" className="input"></input>
                </div>
                <div className="inputfield">
                    <label>Last Name</label>
                    <input type="text" className="input"></input>
                </div>
                <div className="inputfield">
                    <label>Gender</label>
                    <div className="custom_select">
                        <select>
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </div>
                <div className="inputfield">
                    <label>User Name</label>
                    <input type="text" className="input"></input>
                </div>
                <div className="inputfield">
                    <label>Password</label>
                    <input type="password" className="input"></input>
                </div>
                <div className="inputfield">
                    <label>Confirm Password</label>
                    <input type="password" className="input"></input>
                </div>
                <div className="inputfield">
                    <label>Email Address</label>
                    <input type="text" className="input"></input>
                </div>
                <div className="inputfield">
                    <label>Phone Number</label>
                    <input type="text" className="input"></input>
                </div>
                <div className="inputfield">
                    <input htmlType="submit" value="Register" className="btn"></input>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Register);