import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../ContextAPI/Context";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
	const { state, dispatch } = useContext(MyContext);
	const navigate = useNavigate();

	const loginUser = (e) => {
		e.preventDefault();
		let loginInfo = {
			email: e.target.email.value,
			password: e.target.password.value,
		};

		const foundUser = state.registeredUsers.find(
			(user) =>
				user.email === loginInfo.email && user.password === loginInfo.password
		);

		if (foundUser) {
			toast.success("you successfully logged in!");
			dispatch({ type: "loginSuccess", payload: foundUser });
			setTimeout(() => {
				navigate("/profile");
			}, 1000);
		} else {
			toast.error("email or password doesn't match");
		}
	};
	return (
		<div>
			<Toaster position="top-center" reverseOrder={true} />
			<h1>Login Page</h1>
			<form onSubmit={loginUser}>
				<label>
					Email : <input type="email" name="email" required />
				</label>
				<br />
				<label>
					Password: <input type="password" name="password" required />
				</label>
				<br />
				<input type="submit" value="login" />
			</form>
		</div>
	);
}
