import React, { useState } from 'react';
import '../Register/Register.css';
import axios from "../../../config/axios";
import DatePicker from 'react-datepicker';
import { withRouter } from "react-router-dom";
import { notification } from 'antd';
import 'react-datepicker/dist/react-datepicker.css';

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



	const onFinish = () => {
		axios.post("/users/register", { username, password, name, lname, email, birth_date, phone_number, gender })
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

	const uploadFiles = () =>{
		console.log('uploadFile');
	}


	return (
		<div className="wrapper">
			<div className="title">
				Registration Form
            </div>
			<div className="form">
				<div className="inputfield">
					<label>First Name</label>
					<input type="text" className="input" onChange={firstNameHandler}></input>
				</div>
				<div className="inputfield">
					<label>Last Name</label>
					<input type="text" className="input" onChange={lastNameHandler}></input>
				</div>
				<div className="inputfield">
					<label>Gender</label>
					<div className="custom_select" >
						<select onChange={genderHandler}>
							<option value="">Select</option>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
					</div>
				</div>
				<div className="inputfield">
					<label>User Name</label>
					<input type="text" className="input" onChange={userNameHandler}></input>
				</div>
				<div className="inputfield">
					<label>Password</label>
					<input type="password" className="input" onChange={passwordHandler}></input>
				</div>
				<div className="inputfield">
					<label>Confirm Password</label>
					<input type="password" className="input" onChange={confirm_passwordHandler}></input>
				</div>
				<div className="inputfield">
				<label>Birth Date</label>
					<DatePicker 
					selected={birth_date}
					onChange={date => setBirthDate(date)}
					dateFormate = 'dd/mm/yyyy'
					/>
				</div>
				<div className="inputfield">
					<label>Email Address</label>
					<input type="text" className="input" onChange={emailHandler}></input>
				</div>
				<div className="inputfield">
					<label>Phone Number</label>
					<input type="text" className="input" onChange={phone_numberHandler}></input>
				</div>
				<div className="inputfield">
					<input value="Upload" className="btn" onClick={uploadFiles}></input>
				</div>
				<div className="inputfield">
					<input htmlType="submit" value="Register" className="btn" onClick={onFinish}></input>
				</div>
			</div>
		</div>
	)
}

export default withRouter(Register);