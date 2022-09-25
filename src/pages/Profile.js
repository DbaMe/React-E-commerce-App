import React, { useContext } from "react";
import { MyContext } from "../ContextAPI/Context";
import { Navigate } from "react-router-dom";

export default function Profile() {
	const { state } = useContext(MyContext);
	if (state.user) {
		return (
			<div>
				<h1>Profile Page</h1>
			</div>
		);
	} else {
		return <Navigate to="/login" />;
	}
}
