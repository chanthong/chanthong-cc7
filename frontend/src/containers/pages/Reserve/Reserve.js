import React, { useState } from 'react';
import '../Reserve/Reserve.css';
import axios from "../../../config/axios";
import { BASE_BACKEND_URL } from '../../../config/constants';
import { withRouter } from "react-router-dom";
import { notification } from 'antd';

function Reserve(props) {
	const [fileName, setFileName] = useState("");


	const onFinish = ({ date, time, number_guest, reserve_code, note_comment, review_star, review, review_status }) => {
		axios.post("/users/reserve", { date, time, number_guest, reserve_code, note_comment, review_star, review, review_status })
			.then(res => {
				notification.success({
					description: "Reserve successfully"
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
				Reserve Form
            </div>
			<div className="form">
				<div className="inputfield">
					<label>Date</label>
					<input type="text" className="input"></input>
				</div>
				<div className="inputfield">
					<label>Time</label>
					<input type="text" className="input"></input>
				</div>
				<div className="inputfield">
					<label>Number of Guest</label>
					<input type="text" className="input"></input>
				</div>
				<div className="inputfield">
					<label>Reserve Code</label>
					<input type="text" className="input"></input>
				</div>
				<div className="inputfield">
					<label>Note Comment</label>
					<input type="password" className="input"></input>
				</div>
				<div className="inputfield">
					<label>Review</label>
					<input type="password" className="input"></input>
				</div>
				<div className="inputfield">
					<label>Review Star</label>
					<input type="text" className="input"></input>
				</div>
				<div className="inputfield">
					<label>Review Status</label>
					<input type="text" className="input"></input>
				</div>
				<div className="inputfield">
					<input htmlType="submit" value="Register" className="btn"></input>
				</div>
			</div>
		</div>
	)
}

export default withRouter(Reserve);