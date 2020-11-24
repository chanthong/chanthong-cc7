import { notification } from 'antd';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../../../config/axios';
import LocalStorageService from '../../../services/localStorage';
import jwtDecode from 'jwt-decode';

function PartnerLogin(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const usernameHandler = (e) => {
        setUsername(e.target.value);
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    };

    const onFinish = () => {
        axios.post("/partners/login", {
            username,
            password
        })
            .then(res => {
                notification.success({
                    description: "Login success."
                });
                LocalStorageService.setToken(res.data.token);
                LocalStorageService.setARole(res.data.role);
                console.log(res.data);
                console.log(jwtDecode(res.data.token));
                props.setRole("PARTNER");
                props.setPartner(jwtDecode(res.data.token));
                props.history.push("/partner_profile");
            })
            .catch(err => {
                console.log(err);
                notification.error({
                    description: "Login failed."
                });
            });
    };

    return (
        <div className="wrapper">
            <div className="title">
                Partner Login
            </div>
            <div className="form">
                <div className="inputfield">
                    <label>User Name</label>
                    <input type="text" className="input" value={username} onChange={usernameHandler}></input>
                </div>
                <div className="inputfield">
                    <label>Password</label>
                    <input type="password" className="input" value={password} onChange={passwordHandler}></input>
                </div>
                <div className="inputfield">
                    <input htmlType="submit" value="Login" className="btn" onClick={onFinish}></input>
                </div>
            </div>
        </div>
    )
}

export default withRouter(PartnerLogin);