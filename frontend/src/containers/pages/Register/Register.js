import React from 'react';
import './Register.css';
import styled from 'styled-components';
import regisimg from "./Registerimg.png";


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


   // const ForkContainer = styled.div`
   // width: 400px;
   // height: 100px;
   // display: flex;
   // align-items: center;
   // position: relative;
   // margin-left:80px;
   // `;

   // const ForkHandleInput = styled.input`
   // width: 250px;
   // height: 24px;
   // background-color: rgba(200, 200,200, 1);
   // border: none;
   // border-radius: 15px;
   // position: absolute;
   // left: 0px;
   // clip-path: polygon(0 0, 100% 15%, 100% 85%, 0 100%);
   // box-shadow: inset 5px 5px 3px rgba(30, 30, 30, 0.4),
   //             inset -5px -5px 3px rgba(245, 245, 245, 0.5),
   //             5px 5px 5px rgba(30, 30, 30, 0.4);
   // padding: 15px;
   // outline: none;
   // font-size: 16px;
   // font-weight: 700;
   // `;

   // const ForkBody = styled.div`
   // width: 60px;
   // height: 86px;
   // border-radius: 30% 0 0 30%;
   // clip-path: polygon(0 0, 100% 7%, 100% 93%, 0 100%);
   // background-color: rgba(200, 200,200, 1);
   // position: absolute;
   // left: 250px;
   // box-shadow: inset 10px 10px 10px rgba(30, 30, 30, 0.4),

   //             5px 5px 5px rgba(30, 30, 30, 0.4);
   // `;

   // const Fork1 = styled.div`
   // width: 93px;
   // height: 12px;
   // display: flex;
   // flex-direction: column;
   // position: absolute;
   // background-color: rgba(200, 200,200, 1);
   // right: 0;
   // top: 17px;
   // border-radius: 0 5px 5px 0;
   // transform: rotate(5deg);
   // `;

   // const Fork2 = styled.div`
   // width: 93px;
   // height: 12px;
   // display: flex;
   // flex-direction: column;
   // position: absolute;
   // background-color: rgba(200, 200,200, 1);
   // right: 0;
   // top: 35px;
   // border-radius: 0 5px 5px 0;
   // `;

   // const Fork3 = styled.div`
   // width: 93px;
   // height: 12px;
   // display: flex;
   // flex-direction: column;
   // position: absolute;
   // background-color: rgba(200, 200,200, 1);
   // right: 0;
   // top: 52px;
   // border-radius: 0 5px 5px 0;
   // `;


   // const Fork4 = styled.div`
   // width: 93px;
   // height: 12px;
   // display: flex;
   // flex-direction: column;
   // position: absolute;
   // background-color: rgba(200, 200,200, 1);
   // right: 0;
   // bottom: 17px;
   // border-radius: 0 5px 5px 0;
   // transform: rotate(-5deg);
   // `;

	const RegisterElement = styled.img`
	width: auto;
	height: 120px;
	object-fit: cover;
	margin: 20px;
	margin-left:300px;
	`;

function Register() {
	return (
		<div className="background-image">
			<h1 className="Lobster logochanthong-re ">Chanthong</h1>
			<p className="Lobster textuser-re">Firstname</p>
			<SpoonContainer >
            <SpoonHandleInput maxLength="25"></SpoonHandleInput>
            <SpoonHead></SpoonHead>
         </SpoonContainer>
			<p className="Lobster textuser-re">Lastname</p>
			<SpoonContainer >
            <SpoonHandleInput maxLength="25"></SpoonHandleInput>
            <SpoonHead></SpoonHead>
         </SpoonContainer>
			<p className="Lobster textuser-re">Email address</p>
			<p className="Lobster textuser-re">Username</p>

			<p className="Lobster textuser-re">Password</p>
			<p className="Lobster textuser-re">Confirm password</p>

			<p className="Mitr ">โปรดอ่านก่อนไปอิ่ม</p>

			<RegisterElement className="btn-register" src={regisimg} />

		</div>
	)
}

export default Register;
