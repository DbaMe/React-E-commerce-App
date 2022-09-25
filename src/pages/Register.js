import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../ContextAPI/Context";

export default function Register() {
	const { dispatch } = useContext(MyContext);
	const navigate = useNavigate();

	const registerUser = (e) => {
		e.preventDefault();
		let registerInfo = {
			firstName: e.target.firstName.value,
			lastName: e.target.lastName.value,
			username: e.target.username.value,
			email: e.target.email.value,
			password: e.target.password.value,
		};
		dispatch({ type: "addRegisterUser", payload: registerInfo });

		/*   fetch("http://localhost:3001", {method:"POST", headers:{"content-type":"application/json"},body:JSON.stringify(registerInfo)}) */

		navigate("/login");
	};
	return (
		<div>
			<h1>Register Page</h1>
			<form onSubmit={registerUser}>
				<label>
					First Name: <input type="text" name="firstName" required />
				</label>
				<br />
				<label>
					Last Name: <input type="text" name="lastName" required />
				</label>
				<br />
				<label>
					UserName: <input type="text" name="username" required />
				</label>
				<br />
				<label>
					Email : <input type="email" name="email" required />
				</label>
				<br />
				<label>
					Password: <input type="password" name="password" required />
				</label>
				<br />
				<input type="submit" value="register" />
			</form>
		</div>
	);
}
