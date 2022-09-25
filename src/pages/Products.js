import React, { useEffect, useContext /*, useState */ } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { MyContext } from "../ContextAPI/Context";

export default function Products() {
	/* const [data, setData] = useState([]);
	const [cart, setCart] = useState([]); */
	/*const {
		 products, setProducts, setCart, cart  state,
		dispatch,
	} = useContext(MyContext);*/

	const { state, dispatch } = useContext(MyContext);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((result) => {
				/* setProducts(result); */
				dispatch({ type: "products", payload: result });
			});
	});

	/* const addToCart = (product) => {
		let copyProduct = { ...product };
		let foundItem = cart.find((elem) => elem.id === copyProduct.id);

		if (foundItem) {
			foundItem.quantity++;
			setCart([...cart]);
		} else {
			copyProduct.quantity = 1;
			setCart([...cart, copyProduct]);
		}
	}; */

	return (
		<div>
			<h1>Products Page</h1>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
				}}
			>
				{state.products.map((product) => {
					return (
						<div
							style={{
								width: "300px",
								boxShadow: "2px 1px 5px gray",
								borderRadius: "20px",
								margin: "10px",
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								flexDirection: "column",
							}}
						>
							<Link to={`/products/${product.id}`} state={product}>
								<img src={product.image} width="200" height="250" alt="" />
							</Link>

							<h3 /* style={{ width: "90%", textAlign: "center" }} */>
								{product.title}
							</h3>
							<h3>${product.price} </h3>

							<ReactStars
								count={5}
								activeColor={"yellow"}
								value={product.rating.rate}
								isHalf={true}
								size={24}
								edit={false}
							/>
							<button
								onClick={() =>
									dispatch({ type: "addtocart", payload: product })
								}
							>
								add to cart
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}
