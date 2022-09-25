import React, { /* useState, */ useReducer } from "react";
import { MyContext } from "./Context";
import reducer, { initialState } from "./reducer";

/* function reducer(state, action) {
	switch ((action, type)) {
		case "products":
			return { ...state, products: action.payload };
		case "addtocart":
			let foundItem = state.cart.find((elem) => elem.id === action.payload.id);
			if (foundItem) {
				foundItem.quantity++;
				return { ...state, cart: [...state.cart] };
			} else {
				action.payload.quantity = 1;
				return { ...state, cart: [...state.cart, action.payload] };
			}
		default:
			return state;
	}
} */

export default function Container({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	/* const initialState = {
		products: [],
		user: [],
		cart: [],
	}; */

	/* const [products, setProducts] = useState([]);
	const [user, setUser] = useState(null);
	const [cart, setCart] = useState([]);
	const [isLogin, setIsLogin] = useState(false); */

	return (
		<MyContext.Provider
			value={{
				/* products,
				setProducts,
				user,
				setUser,
				cart,
				setCart,
				isLogin,
				setIsLogin, */
				state,
				dispatch,
			}}
		>
			{children}
		</MyContext.Provider>
	);
}
