import React, { useContext } from 'react';
import './Login.css';
import styled from 'styled-components';
import logimg from "./loginimg.png";
import Regisimg from "./Registerimg.png";

import { notification } from 'antd';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from '../../../config/axios';
import LocalStorageService from "../../../services/localStorage";
import jwtDecode from 'jwt-decode';
import UserContext from '../../../context/UserContext';

const SpoonContainer = styled.div`
   width: 400px;
   display: flex;
   align-items: center;
   position: relative;
   margin-left:80px;

   `;

const SpoonHead = styled.div`
   width: 150px;
   height: 96px;
   border-radius: 42% 58% 58% 42% / 50% 50% 50% 50%;
   background-color: rgba(200, 200,200, 1);
   box-shadow: inset 10px 10px 10px rgba(30, 30, 30, 0.4),
               inset -10px -10px 8px rgba(245, 245, 245, 0.6),
               5px 5px 5px rgba(30, 30, 30, 0.4);
   position: absolute;
   right: 0px;
   `;

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
   `;


const ForkContainer = styled.div`
   width: 400px;
   height: 100px;
   display: flex;
   align-items: center;
   position: relative;
   margin-left:80px;
   `;

const ForkHandleInput = styled.input`
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
   `;

const ForkBody = styled.div`
   width: 60px;
   height: 86px;
   border-radius: 30% 0 0 30%;
   clip-path: polygon(0 0, 100% 7%, 100% 93%, 0 100%);
   background-color: rgba(200, 200,200, 1);
   position: absolute;
   left: 250px;
   box-shadow: inset 10px 10px 10px rgba(30, 30, 30, 0.4),
               
               5px 5px 5px rgba(30, 30, 30, 0.4);
   `;

const Fork1 = styled.div`
   width: 93px;
   height: 12px;
   display: flex;
   flex-direction: column;
   position: absolute;
   background-color: rgba(200, 200,200, 1);
   right: 0;
   top: 17px;
   border-radius: 0 5px 5px 0;
   transform: rotate(5deg);
   `;

const Fork2 = styled.div`
   width: 93px;
   height: 12px;
   display: flex;
   flex-direction: column;
   position: absolute;
   background-color: rgba(200, 200,200, 1);
   right: 0;
   top: 35px;
   border-radius: 0 5px 5px 0;
   `;

const Fork3 = styled.div`
   width: 93px;
   height: 12px;
   display: flex;
   flex-direction: column;
   position: absolute;
   background-color: rgba(200, 200,200, 1);
   right: 0;
   top: 52px;
   border-radius: 0 5px 5px 0;
   `;


const Fork4 = styled.div`
   width: 93px;
   height: 12px;
   display: flex;
   flex-direction: column;
   position: absolute;
   background-color: rgba(200, 200,200, 1);
   right: 0;
   bottom: 17px;
   border-radius: 0 5px 5px 0;
   transform: rotate(-5deg);
   `;

const LoginElement = styled.img`
   width: auto;
   height: 120px;
   object-fit: cover;
   margin: 20px;
   margin-left:100px;
   `;

const RegisElement = styled.img`
   width: auto;
   height: 120px;
   object-fit: cover;
   margin: 20px;
   margin-left:30px;
   `;

function Login(props) {

   const{setChange} = useContext(UserContext)

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
            props.setUser(jwtDecode(res.data.token));
            setChange(true);
            history.push('/profile');
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
      <div className="background-image">
         <h1 className="Lobster logochanthong ">Chanthong</h1>
         <p className="Lobster textuser">Username</p>
         <SpoonContainer >
            <SpoonHandleInput onChange={userNameHandler} maxLength="25"></SpoonHandleInput>
            <SpoonHead></SpoonHead>
         </SpoonContainer>
         <p className="Lobster textpw">Password</p>
         <div>
            <ForkContainer>
               <ForkHandleInput type="password" onChange={passwordHandler} />
               <ForkBody />
               <Fork1 />
               <Fork2 />
               <Fork3 />
               <Fork4 />
            </ForkContainer>
         </div>
         <p className="Mitr textforget">Forget password</p>
         <LoginElement className="btn-login" onClick={onFinish} src={logimg} />
         <Link to="/register">
               <RegisElement className="btn-login" src={Regisimg} />
         </Link>
      </div>
   )
}

export default Login;
