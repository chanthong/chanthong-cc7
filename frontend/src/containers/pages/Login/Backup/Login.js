import { notification } from 'antd';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../../../config/axios';
import LocalStorageService from "../../../../services/localStorage";

function Login(props) {
   const history = useHistory();

   const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

   const onFinish = (values) => {
      axios.post("/users/login", {
         username,
         password
      })
         .then(res => {
            notification.success({
               description: "Login success."
            });
            LocalStorageService.setToken(res.data.token);
            props.setRole("USER");
            history.push('/');
         })
         .catch(err => {
            console.log(err);
            notification.error({
               description: "Login failed."
            });
         });
   };


   const userNameHandler = (even) => {
		setUsername(even.target.value);
   }
   
   const passwordHandler = (even) => {
		setPassword(even.target.value);
	}

   return (
      <div className="wrapper">
         <div className="title">
            Login Form
            </div>
         <div className="form">

            <div className="inputfield">
               <label>User Name</label>
               <input type="text" className="input" onChange={userNameHandler}></input>
            </div>
            <div className="inputfield">
               <label>Password</label>
               <input type="password" className="input" onChange={passwordHandler}></input>
            </div>
            <div className="inputfield">
               <input htmlType="submit" value="Login" className="btn" onClick={onFinish}></input>
            </div>
         </div>
      </div>
   )
}

export default Login;
