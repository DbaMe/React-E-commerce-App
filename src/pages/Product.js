import React from "react";
import { useLocation } from "react-router-dom";

export default function Product() {
	const location = useLocation();
	console.log(location);

	return (
		<div>
			<h1>{location.state.title} </h1>
			{/* <img src={location.state.image} width="200" alt="" /> */}
			<img src={location.state.image} width="200" alt="" />
			<h3>{location.state.description} </h3>
		</div>
	);
}
