import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
import '../../config/roles';
import localStorage from "../../services/localStorage"

function Navbar({ role, setRole }) {
	const removeToken = () => {
		localStorage.clearToken();
		setRole("GUEST");
	}
	
	return (
		<div className="navbar navbar_3">
			<div className="navbar_left">
				<div className="logo">Chan<span>thong</span></div>
				<ul className="menu">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/">Profile</Link></li>
				</ul>
			</div>
			<div className="navbar_right">
				<ul>
					{role === "GUEST" && <li><Link to="/Login">Login</Link></li>}
					{role === "USER" && <li onClick={removeToken}><Link to="/">Logout</Link></li>}
				</ul>
			</div>
		</div>
	)
}

export default Navbar
