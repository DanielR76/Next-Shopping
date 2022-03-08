import React, { createContext, useReducer } from "react";
import { Types } from "../utilities/enums";

type ContexType = {
	productState: InitialStateType;
	dispatch: React.Dispatch<{ type: Types; payload: any }>;
};

export const ProductsContext = createContext<Partial<ContexType>>({});

const initialState = {
	cart: [],
};

const reducer = (state: any, action: any) => {
	switch (action.type) {
		case Types.Add:
			const position = state.cart?.findIndex(
				(value) => value?.id === action?.payload?.id
			);
			let temp;
			if (position >= 0) {
				temp = [...state.cart];
				temp[position].quantity += action.payload.quantity;
			} else {
				temp = [...state.cart.concat(action.payload)];
			}
			return {
				...state,
				cart: temp,
			};
		default:
			return initialState;
	}
};

const ProductsProvider: React.FC = ({ children }) => {
	const [productState, dispatch] = useReducer(reducer, initialState);

	return (
		<ProductsContext.Provider value={{ productState, dispatch }}>
			{children}
		</ProductsContext.Provider>
	);
};

export default ProductsProvider;
