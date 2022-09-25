import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../ContextAPI/Context";

export default function Navbar() {
	const { state } = useContext(MyContext);

	return (
		<nav style={{ display: "flex" }}>
			<div>
				{/* <NavLink to="/">
					<img
						src="https://www.creativefabrica.com/wp-content/uploads/2021/06/29/Gradient-ecommerce-logo-Online-shop-Graphics-14011621-1.png"
						width="100"
						alt=""
					/>
				</NavLink> */}
			</div>
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				{state.user ? (
					<li>
						<NavLink to="/profile">Profile</NavLink>
					</li>
				) : (
					<>
						<li>
							<NavLink to="/register">Register</NavLink>
						</li>

						<li>
							<NavLink to="/login">Login</NavLink>
						</li>
					</>
				)}
				<li>
					<NavLink to="/products">Products</NavLink>
				</li>
				<li>
					<NavLink
						to="/cart"
						style={{
							display: "flex",
							marginTop: "15px",
						}}
					>
						Cart
						<sup
							style={{
								display: "inline-block",
								width: "20px",
								height: "20px",
								color: "white",
								padding: "5px",
								borderRadius: "14px",
								backgroundColor: "black",
								fontSize: "17px",
								textAlign: "center",
								marginLeft: "8px",
							}}
						>
							{state.cart.length}
						</sup>
					</NavLink>
				</li>
				<li>
					<NavLink to="/contactus">Contact Us</NavLink>
				</li>
			</ul>

			<div
				style={{
					display: "flex",
					justifyItems: "end",
					alignItems: "end",
				}}
			>
				<NavLink to="/">
					<img
						src="https://www.creativefabrica.com/wp-content/uploads/2021/06/29/Gradient-ecommerce-logo-Online-shop-Graphics-14011621-1.png"
						width="150"
						alt=""
					/>
				</NavLink>
			</div>
		</nav>
	);
}
