import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../ContextAPI/Context";

export default function Cart() {
	/* const { cart, setCart } = useContext(MyContext); */
	const { state, dispatch } = useContext(MyContext);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const sum = state.cart.reduce((acc, item) => {
			acc += item.price * item.quantity;
			return acc;
		}, 0);

		setTotal(sum);
	}, [state.cart]);

	/* const incrementQuantity = (product) => {
		product.quantity++;
		setCart([...cart]);
	};

	const decrementQuantity = (product) => {
		product.quantity--;
		setCart([...cart]);
	};

	const deleteItemFromCart = (product) => {
		setCart(cart.filter((elem) => elem.id !== product.id));
	}; */

	return (
		<div>
			<h1>Cart Page</h1>

			<div>
				{state.cart.map((product) => {
					return (
						<div style={{ display: "flex" }}>
							<div style={{ width: "200px" }}>
								<img src={product.image} width="100" height="100" alt="" />
							</div>
							<div style={{ width: "200px" }}>
								<h3>{product.title} </h3>
								<h1>${product.price} </h1>
							</div>
							<div style={{ width: "200px" }}>
								{/* <button onClick={() => incrementQuantity(product)}> + </button> */}
								<button
									onClick={() =>
										dispatch({ type: "incrementQuantity", payload: product })
									}
								>
									+
								</button>
								<p>{product.quantity} </p>
								{/* <button disabled={product.quantity === 1} onClick={() => decrementQuantity(product)}> - </button> */}
								<button
									disabled={product.quantity === 1}
									onClick={() =>
										dispatch({ type: "decrementQuantity", payload: product })
									}
								>
									-
								</button>
							</div>
							<div style={{ width: "200px" }}>
								{/* <button onClick={() => deleteItemFromCart(product)}>delete item </button> */}
								<button
									onClick={() =>
										dispatch({ type: "deleteProduct", payload: product })
									}
								>
									delete item
								</button>
							</div>
						</div>
					);
				})}
			</div>

			<div>
				<h1>Total: ${total.toFixed(2)} </h1>
			</div>
		</div>
	);
}
