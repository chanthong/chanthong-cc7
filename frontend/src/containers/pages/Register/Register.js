import React, { useState } from 'react';
import './Register.css';
import styled from 'styled-components';
import regisimg from "./Registerimg.png";

import axios from "../../../config/axios";
import { DatePicker } from 'antd';
import { withRouter } from "react-router-dom";
import { notification } from 'antd';
import 'react-datepicker/dist/react-datepicker.css';
import LocalStorageService from '../../../services/localStorage';


// const SpoonContainer = styled.div`
//    width: 400px;
//    display: flex;
//    align-items: center;
//    position: relative;
//    margin-left:80px;

//    `;

//    const SpoonHead = styled.div`
//    width: 150px;
//    height: 96px;
//    border-radius: 42% 58% 58% 42% / 50% 50% 50% 50%;
//    background-color: rgba(200, 200,200, 1);
//    box-shadow: inset 10px 10px 10px rgba(30, 30, 30, 0.4),
//                inset -10px -10px 8px rgba(245, 245, 245, 0.6),
//                5px 5px 5px rgba(30, 30, 30, 0.4);
//    position: absolute;
//    right: 0px;
//    `;

const SpoonHandleInput = styled.input`
   width: 250px;
   height: 24px;
   background-color: rgba(200, 200,200, 1);
   border: none;
   border-radius: 15px;
   position: absolute;
   left: 0px;
   clip-path: polygon(0 0, 100% 15%, 100% 85%, 0 100%);
   box-shadow: inset 5px 5px 3px rgba(30, 30, 30, 0.4),
               inset -5px -5px 3px rgba(245, 245, 245, 0.5),
               5px 5px 5px rgba(30, 30, 30, 0.4);
   padding: 15px;
   outline: none;
   font-size: 16px;
   font-weight: 700;
   margin-left:280px;
   `;

const SpoonHandleDate = styled(DatePicker)`
   width: 250px;
   height: 24px;
   background-color: rgba(200, 200,200, 1);
   border: none;
   border-radius: 15px;
   position: absolute;
   left: 0px;
   clip-path: polygon(0 0, 100% 15%, 100% 85%, 0 100%);
   box-shadow: inset 5px 5px 3px rgba(30, 30, 30, 0.4),
               inset -5px -5px 3px rgba(245, 245, 245, 0.5),
               5px 5px 5px rgba(30, 30, 30, 0.4);
   padding: 15px;
   outline: none;
   font-size: 16px;
   font-weight: 700;
   margin-left:280px;
   `;


const RegisterElement = styled.img`
	width: auto;
	height: 120px;
	object-fit: cover;
	margin: 20px;
	margin-left:200px;
	`;

function Register(props) {

   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [confirm_password, setconfirm_Password] = useState("");
   const [name, setName] = useState("");
   const [lname, setLname] = useState("");
   const [email, setEmail] = useState("");
   const [phone_number, setphone_number] = useState("");
   const [gender, setGender] = useState("");
   const [birth_date, setBirthDate] = useState("");


   const onFinish = async() => {
      await axios.post("/users/register", { username, password, name, lname, email, birth_date, phone_number, gender })

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

         await axios.post("/users/login", {
            username,
            password
        })
            .then(res => {
                notification.success({
                    description: "Login success."
                });
                LocalStorageService.setToken(res.data.token);
                props.setRole("USER");
            })
            .catch(err => {
                notification.error({
                    description: "Login failed."
                });
            });
         
   };

   const firstNameHandler = (event) => {
      setName(event.target.value);
   }

   const lastNameHandler = (even) => {
      setLname(even.target.value);
   }

   const userNameHandler = (even) => {
      setUsername(even.target.value);
   }

   const passwordHandler = (even) => {
      setPassword(even.target.value);
   }

   const confirm_passwordHandler = (even) => {
      setconfirm_Password(even.target.value);
   }

   const emailHandler = (even) => {
      setEmail(even.target.value);
   }

   const phone_numberHandler = (even) => {
      setphone_number(even.target.value);
   }

   const genderHandler = (even) => {
      setGender(even.target.value);
   }

   const birthDateHandler = (date, dateString) => {
      setBirthDate(dateString);
   }



   return (
      <div className="background-image">
         <h1 className="Lobster logochanthong-re ">Chanthong</h1>
         <div className="row-text">
            <p className="Lobster textuser-re">Firstname</p>
            <SpoonHandleInput onChange={firstNameHandler} maxLength="25"></SpoonHandleInput>
         </div>
         <div className="row-text">
            <p className="Lobster textuser-re">Lastname</p>
            <SpoonHandleInput onChange={lastNameHandler} maxLength="25"></SpoonHandleInput>
         </div>
         <div className="row-text">
            <p className="Lobster textuser-re">Email address</p>
            <SpoonHandleInput onChange={emailHandler} maxLength="25"></SpoonHandleInput>
         </div>
         <div className="row-text">
            <p className="Lobster textuser-re">Username</p>
            <SpoonHandleInput onChange={userNameHandler} maxLength="25"></SpoonHandleInput>
         </div>
         <div className="row-text">
            <p className="Lobster textuser-re">Password</p>
            <SpoonHandleInput onChange={passwordHandler} maxLength="25"></SpoonHandleInput>
         </div>
         <div className="row-text">
            <p className="Lobster textuser-re">Confirm password</p>
            <SpoonHandleInput onChange={confirm_passwordHandler} maxLength="25"></SpoonHandleInput>
         </div>
         <div className="row-text">
            <p className="Lobster textuser-re">Phone number</p>
            <SpoonHandleInput onChange={phone_numberHandler} maxLength="25"></SpoonHandleInput>
         </div>
         <div className="row-text">
            <p className="Lobster textuser-re">Gender</p>
            <SpoonHandleInput onChange={genderHandler} maxLength="25"></SpoonHandleInput>
         </div>
         <div className="row-text">
            <p className="Lobster textuser-re">Birth date</p>
            <SpoonHandleDate onChange={birthDateHandler} maxLength="25"></SpoonHandleDate>
         </div>

         {/* <p className="Mitr ">โปรดอ่านก่อนไปอิ่ม</p> */}
         <RegisterElement className="btn-register" onClick={onFinish} src={regisimg} />
      </div>
   )
}

export default withRouter(Register);
