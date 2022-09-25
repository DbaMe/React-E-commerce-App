export default function reducer(state, action) {
	switch (action.type) {
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
		case "incrementQuantity":
			action.payload.quantity++;
			return { ...state, cart: [...state.cart] };
		case "decrementQuantity":
			action.payload.quantity--;
			return { ...state, cart: [...state.cart] };
		case "deleteProduct":
			/* action.payload.quantity++; */
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload.id),
			};

		case "addRegisterUser":
			return {
				...state,
				registeredUsers: [...state.registeredUsers, action.payload],
			};
		case "loginSuccess":
			return { ...state, user: action.payload };
		default:
			return state;
	}
}

export const initialState = {
	products: [],
	user: null,
	cart: [],
	registeredUsers: [],
};
