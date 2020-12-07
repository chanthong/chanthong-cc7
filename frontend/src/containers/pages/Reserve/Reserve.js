import React, { useContext, useState } from 'react';
import '../Reserve/Reserve.css';
import axios from "../../../config/axios";
import { useParams, withRouter } from "react-router-dom";
import { notification } from 'antd';
import PlateImg from '../../uploadfile/dishelement.png';
import UserContext from '../../../context/UserContext';
import styled from 'styled-components'
import food1 from '../../uploadfile/food3.jpg'
import dateIcon from '../../uploadfile/DateMiniPlate.png'
import timeInput from '../../uploadfile/TimeMiniPlate.png'
import personInput from '../../uploadfile/PersonMiniPlate.png'
import contactInput from '../../uploadfile/ContactMiniPlate.png'
import noteInput from '../../uploadfile/miniPlate.png'
import plate1 from '../../uploadfile/dishelement.png'
import Promo50percent from '../../uploadfile/Promotion50Percent.png'
import reserveButton from '../../uploadfile/ReserveButtonElement.png'

function Reserve({ user: { username, name, lname, email, phone_number, current_point }, history }) {
	const { reservePartner } = useContext(UserContext);
	const { id } = useParams();
	console.log(reservePartner.id);
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [number_guest, setNumberGuest] = useState("");

	const dateHandler = (e) => {
		setDate(e.target.value);
	};
	const timeHandler = (e) => {
		setTime(e.target.value);
	};
	const numberGuestHandler = (e) => {
		setNumberGuest(e.target.value);
	};

	const onFinish = () => {
		axios.post(`/reserves/${id}`, {
			date,
			time,
			number_guest,
		})
			.then(res => {
				notification.success({
					description: "Reserve successfully"
				});
				history.push("/");
			})
			.catch(err => {
				console.log(err);
				notification.error({
					description: "Something went wrong."
				});
			});
	};

	const handleConfirm = () => {
		history.push("/reserve_confirm")
	}

	const RestNameContainer = styled.div`
	width: 100vw;
	height: 50px;
	margin: 0;
	padding-left: 130px;
	/* background-color: salmon; */
	display: flex;
	justify-content: flex-start;
	align-items: center;
	`

	const RestDetailContainer = styled.div`
	width: 100vw;
	height: 400px;
	/* background-color: green; */
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	`

	const RestName = styled.h1`
	color: #DFCA95;
	font-family: 'Lobster', cursive;
	text-shadow: 3px 3px 2px rgba(0,0,0,0.6);
	font-size: 2.2rem;
	`

	const PlateIcon = styled.img`
	width: 320px;
	height: auto;
	position: absolute;
	left: -180px;
	object-fit: cover;
	overflow: hidden;
	`

	const RestDescriptionBox = styled.div`
	width: 380px;
	height: 100%;
	padding-left: 130px;
	background-color: #f3cdcc;
	border: 4px solid #dfca95;
	margin-right: 5px;
	overflow: hidden;
	`

	const DescriptionContainer = styled.div`
	width: 250px;
	height: 330px;
	/* background-color: blue; */
	word-wrap: break-word;
	padding-top: 15px;
	font-family: 'Mitr', sans-serif;
	font-size: 12px;
	`

	const ImageContainer = styled.div`
	width: 440px;
	height: 100%;
	display: flex;
	flex-direction: column;
	/* background-color: violet; */
	margin-right: 5px;
	justify-content: flex-start;
	position: relative;
	box-sizing: border-box;
	`
	const FoodImg = styled.img`
	width: 100%;
	height: 310px;
	object-fit: cover;
	overflow: hidden;
	border: 4px solid #dfca95;
	`

	const ThumbnailContainer = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	/* background-color: orange; */
	position: absolute;
	bottom: 0;
	justify-content: space-between;
	`

	const ThumbnailImg = styled.img`
	width: 80px;
	height: 80px;
	object-fit: cover;
	overflow: hidden;
	/* margin-right: 10px; */
	box-sizing: border-box;
	`
	const MiniPlate = styled.img`
	width: 50px;
	height: auto;
	object-fit: cover;
	overflow: hidden;
	position: absolute;
	left: -2px;
	top: 0;
	
	`
	const ReserveDetailContainer = styled.div`
	width: 420px;
	height: 310px;
	/* background-color: burlywood; */
	padding: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	position: relative;
	justify-content: flex-start;
	`

	const ReserveDateInput = styled.input`
	width: 200px;
	height: 24px;
	font-family: 'Mitr', sans-serif;
	color: #A8201a;
	/* -webkit-text-stroke: 0.5px #A8201a; */
	border-radius: 12px;
	border: 3px solid #DFCA95;
	background-color: #EBADAA;
	outline: none;
	position: absolute;
	left: 20px;
	bottom: 8px;
	padding-left: 50px;
	font-size: 14px;
	font-weight: bold; 
	`


	const InputContainer = styled.div`
	width: 150px;
	height: 50px;
	position: relative;
	/* background-color: azure; */
	display: flex;
	justify-content: flex-start;
	/* margin-bottom: 5px; */
	`

	const InputContainer2 = styled.div`
	width: 420px;
	height: 50px;
	position: relative;
	/* background-color: seagreen; */
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	`
	const ReserveNote = styled.textarea`
	width: 370px;
	height: 80px;
	border-radius: 10px;
	color:  #A8201a;
	font-family: 'Mitr', sans-serif;
	position: absolute;
	top: 16px;
	background-color: #EBADAA;
	border: 3px solid #DFCA95;
	outline: none;
	padding-left: 55px;
	`

	const PromotionDivContainer = styled.div`
	width: 370px;
	height: 60px;
	/* background-color: orange; */
	position: absolute;
	bottom: 0;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	`

	const PromotionImg = styled.img`
	width: auto;
	height: 55px;
	object-fit: cover;
	overflow: hidden;
	`

	const PromotionDiv = styled.div`
	width: auto;
	height: 55px;
	object-fit: cover;
	overflow: hidden;
	position: relative;
	display: flex;
	align-items: center;
	flex-direction: column;
	`

	const PromotionTimeSelect = styled.span`
	font-family: 'Mitr', sans-serif;
	font-size: 10px;
	text-align: center;
	position: absolute;
	bottom: 8px;
	color: rgb(70,70,70);
	`

	const ReserveButtonContainer = styled.div`
	width: 370px;
	height: 70px;
	/* background-color: orange; */
	margin-top: 15px;
	display: flex;
	justify-content: center;
	`
	const ReserveButton = styled.img`
	height: 65px;
	width: auto;
	object-fit: cover;
	overflow: hidden;
	`

	const DetailContainer = styled.div`
	width: 370px;
	height: 400px;
	/* background-color: green; */
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	`


	return (

		<div className="outerFramePartner" style={{ backgroundColor: "white" }}>
			<RestNameContainer><RestName>Some Restaurant</RestName></RestNameContainer>
			<RestDetailContainer>
				<PlateIcon src={plate1} />
				<RestDescriptionBox>
					<DescriptionContainer>
						ABCDE fgdskl;la .DSHF;Khds .SDHFKJF  lgohs a/lfjg;jc sdfgjad;fg asdlkgjalsdfg
						asdkg adkflgj kd kfgo afgk alkfgjakc klfjg,x lfgla.

					</DescriptionContainer>
				</RestDescriptionBox>
				<ImageContainer>
					<FoodImg src={food1} />
					<ThumbnailContainer>
						<ThumbnailImg src={food1} />
						<ThumbnailImg src={food1} />
						<ThumbnailImg src={food1} />
						<ThumbnailImg src={food1} />
						<ThumbnailImg src={food1} />
					</ThumbnailContainer>
				</ImageContainer>
				<DetailContainer>

					<ReserveDetailContainer>
						<InputContainer>
							<ReserveDateInput type="date" name="Reserve_date" />
							<MiniPlate src={dateIcon} />
						</InputContainer>
						<InputContainer>
							<ReserveDateInput type="time" name="Reserve_time" />
							<MiniPlate src={timeInput} />
						</InputContainer>
						<InputContainer2>
							<InputContainer>
								<ReserveDateInput type="number" name="Reserve_num_person" style={{ width: "100px" }} />
								<MiniPlate src={personInput} />
							</InputContainer>
							<InputContainer>
								<ReserveDateInput type="text" name="Reserve_contact" />
								<MiniPlate src={contactInput} />
							</InputContainer>
						</InputContainer2>
						<InputContainer2>
							<ReserveNote />
							<MiniPlate src={noteInput} />
						</InputContainer2>
						<PromotionDivContainer>
							<PromotionDiv>
								<PromotionImg src={Promo50percent} />
								<PromotionTimeSelect>19.00</PromotionTimeSelect>
							</PromotionDiv>
							<PromotionDiv>
								<PromotionImg src={Promo50percent} />
								<PromotionTimeSelect>19.00</PromotionTimeSelect>
							</PromotionDiv>
							<PromotionDiv>
								<PromotionImg src={Promo50percent} />
								<PromotionTimeSelect>19.00</PromotionTimeSelect>
							</PromotionDiv>
							<PromotionDiv>
								<PromotionImg src={Promo50percent} />
								<PromotionTimeSelect>19.00</PromotionTimeSelect>
							</PromotionDiv>
							<PromotionDiv>
								<PromotionImg src={Promo50percent} />
								<PromotionTimeSelect>19.00</PromotionTimeSelect>
							</PromotionDiv>
						</PromotionDivContainer>
					</ReserveDetailContainer>
					<ReserveButtonContainer>
						<ReserveButton src={reserveButton} onClick={handleConfirm} />
					</ReserveButtonContainer>
				</DetailContainer>
			</RestDetailContainer>
		</div>




		// <div className="outerRedPartner"></div>
		// <div className="outerPlatePartner">
		// 	<div className="innerPlatePartner"></div>
		// </div>
		// <div className="chanthong font-lobster" style={{ fontSize: "220%", top: "30px", left: "950px", color: "#D85B55", textShadow: "none" }}>Chanthong</div>

		// <div>
		// 	<img className="plateLeftPartner" src={PlateImg} alt="plate" style={{ left: "57px", top: "30px", zIndex: "1200", width: "50px", height: "50px" }}></img>
		// </div>
		// <label>date:</label>
		// <input placeholder="date" className="registerTab font-mitr" style={{ left: "60px", top: "40px", zIndex: "1100" }} value={date} onChange={dateHandler} />

		// <div>
		// 	<img className="plateLeftPartner" src={PlateImg} alt="plate" style={{ left: "357px", top: "30px", zIndex: "1200", width: "50px", height: "50px" }}></img>
		// </div>
		// <label>time:</label>
		// <input placeholder="time" className="registerTab font-mitr" style={{ left: "360px", top: "40px", zIndex: "1100" }} value={time} onChange={timeHandler} />

		// <div>
		// 	<img className="plateLeftPartner" src={PlateImg} alt="plate" style={{ left: "57px", top: "90px", zIndex: "1200", width: "50px", height: "50px" }}></img>
		// 	<label>number_guest:</label>
		// 	<input placeholder="number guest" className="registerTab font-mitr" style={{ left: "60px", top: "100px", zIndex: "1100" }} value={number_guest} onChange={numberGuestHandler} />
		// </div>

		// <div>
		// 	<img className="plateLeftPartner" onClick={onFinish} src={PlateImg} alt="plate" style={{ left: "357px", top: "420px", zIndex: "1200", width: "50px", height: "50px" }}></img>
		// </div>


		// <div className="wrapper">
		// 	<div className="title">
		// 		Reserve Form
		//     </div>
		// 	<div className="form">
		// 		<div className="inputfield">
		// 			<label>Date</label>
		// 			<input type="text" className="input"></input>
		// 		</div>
		// 		<div className="inputfield">
		// 			<label>Time</label>
		// 			<input type="text" className="input"></input>
		// 		</div>
		// 		<div className="inputfield">
		// 			<label>Number of Guest</label>
		// 			<input type="text" className="input"></input>
		// 		</div>
		// 		<div className="inputfield">
		// 			<label>Reserve Code</label>
		// 			<input type="text" className="input"></input>
		// 		</div>
		// 		<div className="inputfield">
		// 			<label>Note Comment</label>
		// 			<input type="password" className="input"></input>
		// 		</div>
		// 		<div className="inputfield">
		// 			<label>Review</label>
		// 			<input type="password" className="input"></input>
		// 		</div>
		// 		<div className="inputfield">
		// 			<label>Review Star</label>
		// 			<input type="text" className="input"></input>
		// 		</div>
		// 		<div className="inputfield">
		// 			<label>Review Status</label>
		// 			<input type="text" className="input"></input>
		// 		</div>
		// 		<div className="inputfield">
		// 			<input htmlType="submit" value="Register" className="btn"></input>
		// 		</div>
		// 	</div>
		// </div>
	)
}

export default withRouter(Reserve);