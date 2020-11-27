import React from 'react'
import '../Login/Login.css'
import styled from 'styled-components'


function Login() {
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

   const PlateOuter = styled.div`
   width: 144px;
   height: 144px;
   background-color: #DFCA95;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   box-shadow: 10px 10px 8px rgba(30, 30, 30, 0.25);
   margin-left: 250px;
   `;

   const InnerPlate = styled.div`
   width: 90px;
   height: 90px;
   background-color: #DFCA95;
   border-radius: 50%;
   box-shadow: inset 8px 8px 10px rgba(100, 70, 10, 0.25),
               inset -8px -8px 10px rgba(255, 240, 200, 0.4);
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


   return (
      <div className="background-image">
         <h1 className="Lobster logochanthong ">Chanthong</h1>
         <p className="Lobster textuser">Username</p>
         <SpoonContainer>
            <SpoonHandleInput maxLength="25"></SpoonHandleInput>
            <SpoonHead></SpoonHead>
         </SpoonContainer>
         <p className="Lobster textpw">Password</p>
         <div>
            <ForkContainer>
               <ForkHandleInput />
               <ForkBody />
               <Fork1 />
               <Fork2 />
               <Fork3 />
               <Fork4 />
            </ForkContainer>
         </div>
         <p className="Mitr textforget">Forget password</p>
         <PlateOuter>
            <InnerPlate className="Lobster textlogin">Login</InnerPlate>
         </PlateOuter>
      </div>
   )
}

export default Login
