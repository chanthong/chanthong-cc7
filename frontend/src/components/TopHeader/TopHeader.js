import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../../config/roles';
import "./TopHeader.css";
import loginimg from "./loginimg.png";
import Registerimg from "./Registerimg.png";
import LoginFC from "./LoginWithFacebook.png";
import LoginGg from "./LoginWithGoogle.png";


const LoginElement = styled.img`
   width: auto;
   height: 120px;
   object-fit: cover;
   margin: 20px;
   margin-left:30px;
   `;

const RegisterElement = styled.img`
   width: auto;
   height: 120px;
   object-fit: cover;
   margin: 20px;
   margin-left:30px;
   `;

const LoginWithFacebook = styled.img`
   width: auto;
   height: 120px;
   object-fit: cover;
   margin: 20px;
   margin-left:30px;
   `;

const LoginWithGoogle = styled.img`
   width: auto;
   height: 120px;
   object-fit: cover;
   margin: 20px;
   margin-left:30px;
   `;

function TopHeader() {
   return (
      <div className="background-image">
         <h1 className="Lobster logochanthong-top ">Chanthong</h1>
         <p className="Lobster textrs">reservation service</p>
         <div className="row">
            <Link to="/login">
               <LoginElement className="btn-login" src={loginimg} alt="login" />
            </Link>
            <Link to="/register">
               <RegisterElement className="btn-login" src={Registerimg} />
            </Link>
         </div>
         <div>
            <LoginWithFacebook className="btn-login" src={LoginFC} />
            <LoginWithGoogle className="btn-login" src={LoginGg} />
         </div>
      </div>
   )
}

export default TopHeader;
