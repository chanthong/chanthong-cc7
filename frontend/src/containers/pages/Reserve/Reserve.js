import React, { useContext, useState } from 'react';
import '../Reserve/Reserve.css';
import axios from "../../../config/axios";
import { useParams, withRouter } from "react-router-dom";
import UserContext from '../../../context/UserContext';

//MUI
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Box, Grid, Paper, TextField, Button, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
	subTitle: {
		display: 'flex',
	},
	label:{
		marginLeft:'5px'
	},
	reserveImage: {
		width: "350px",
		overflow: 'hidden'
	},
	paper: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	inputText: {
		marginTop: '10px',
		padding: '0 20px'
	},
	button: {
		marginTop: '10px',
	},

}));

function Reserve({ user: { username, name, lname, email, phone_number, current_point }, history }) {
	const classes = useStyles();

	const { reservePartner } = useContext(UserContext);
	const { id } = useParams();
	console.log(reservePartner.id);
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [number_guest, setNumberGuest] = useState("");
	const [phoneNumber, setPhoneNum] = useState(phone_number);
	const [note_comment, setnoteComment] = useState("");
	const [reserve_status, setreserveStatus] = useState("");

	const dateHandler = (e) => {
		setDate(e.target.value);
	};
	const timeHandler = (e) => {
		setTime(e.target.value);
	};
	const numberGuestHandler = (e) => {
		setNumberGuest(e.target.value);
	};

	const phoneHandler = (e) => {
		setPhoneNum(e.target.value)
	};

	const noteHandler = (e) => {
		setnoteComment(e.target.value)
	}

	const onFinish = () => {
		axios.post(`/reserves/${id}`, {
			date,
			time,
			number_guest,
			phoneNumber,
			reserve_status,
			note_comment,
		})
			.then(res => {
				alert("Reserve successfully");
				history.push("/user_dashboard");
			})
			.catch(err => {
				alert("Something went wrong.");
			});
	};

	const handleConfirm = () => {
		history.push("/reserve_confirm")
	}


	return (
		<Container maxWidth="md" style={{ marginTop: '100px' }}>
			<Typography variant="h5">
				เก็ตเฟรช @ วัน-โอ-วัน เดอะ เติร์ด เพลส แอท ทรู ดิจิทัล พาร์ค (getfresh @ 101 The Third Place at True Digital Park)
			</Typography>
			<Box component='div' className={classes.subTitle}>
				<Typography variant="subtitle1" color="textSecondary">จองแล้ว</Typography>
				<Typography className={classes.label} variant="subtitle1" color="textSecondary">4444</Typography>
				<Typography className={classes.label} variant="subtitle1" color="textSecondary">ครั้ง</Typography>
			</Box>
			<Grid container style={{ marginTop: '20px' }}>
				<Grid item md={6} style={{ textAlign: 'center' }}>
					<img
						src={"https://source.unsplash.com/random"}
						alt="restaurant"
						className={classes.reserveImage}
					/>
				</Grid>
				<Grid item md={6}>
					<Paper className={classes.paper}>
						<Typography variant="h6" gutterBottom>รายละเอียดการจอง</Typography>
						<TextField
							id="date"
							type="date"
							size="small"
							className={classes.inputText}
						/>
						<TextField
							id="time"
							type="time"
							size="small"
							className={classes.inputText}
						/>
						<TextField
							id="standard-number"
							label="Person"
							type="number"
							className={classes.inputText}
						/>
						<TextField
							id="text-multiline"
							label="เพิ่มเติม"
							multiline
							rows={4}
							className={classes.inputText}
						/>
						<Button className={classes.button} variant="contained" color="primary">
							ยืนยันการจอง
      					</Button>
					</Paper>
				</Grid>
			</Grid>

		</Container>



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