import React, { useContext, useState } from 'react';
import '../Reserve/Reserve.css';
import axios from "../../../config/axios";
import { useParams, withRouter } from "react-router-dom";
import { notification } from 'antd';
import PlateImg from '../../uploadfile/dishelement.png';
import UserContext from '../../../context/UserContext';

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

	return (

		<div className="outerFramePartner" style={{ backgroundColor: "white" }}>
			<div className="outerRedPartner"></div>
			<div className="outerPlatePartner">
				<div className="innerPlatePartner"></div>
			</div>
			<div className="chanthong font-lobster" style={{ fontSize: "220%", top: "30px", left: "950px", color: "#D85B55", textShadow: "none" }}>Chanthong</div>

			<div>
				<img className="plateLeftPartner" src={PlateImg} alt="plate" style={{ left: "57px", top: "30px", zIndex: "1200", width: "50px", height: "50px" }}></img>
			</div>
			<label>date:</label>
			<input placeholder="date" className="registerTab font-mitr" style={{ left: "60px", top: "40px", zIndex: "1100" }} value={date} onChange={dateHandler} />

			<div>
				<img className="plateLeftPartner" src={PlateImg} alt="plate" style={{ left: "357px", top: "30px", zIndex: "1200", width: "50px", height: "50px" }}></img>
			</div>
			<label>time:</label>
			<input placeholder="time" className="registerTab font-mitr" style={{ left: "360px", top: "40px", zIndex: "1100" }} value={time} onChange={timeHandler} />

			<div>
				<img className="plateLeftPartner" src={PlateImg} alt="plate" style={{ left: "57px", top: "90px", zIndex: "1200", width: "50px", height: "50px" }}></img>
				<label>number_guest:</label>
				<input placeholder="number guest" className="registerTab font-mitr" style={{ left: "60px", top: "100px", zIndex: "1100" }} value={number_guest} onChange={numberGuestHandler} />
			</div>

			<div>
				<img className="plateLeftPartner" onClick={onFinish} src={PlateImg} alt="plate" style={{ left: "357px", top: "420px", zIndex: "1200", width: "50px", height: "50px" }}></img>
			</div>

		</div>
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