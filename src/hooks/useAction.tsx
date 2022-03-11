import { useContext } from "react";
import { ProductsContext } from "context/ProductsProvider";
import { Types } from "../utilities/enums";

export const useAction = () => {
	const { dispatch } = useContext(ProductsContext);

	const addCart = (payload: CartType) => {
		dispatch({
			type: Types.Add,
			payload,
		});
	};

	const removeToCart = (payload: TProductId) => {
		dispatch({
			type: Types.Remove,
			payload,
		});
	};

	const emptyCart = () => {
		dispatch({
			type: Types.Empty,
			payload: [],
		});
	};

	return { addCart, removeToCart, emptyCart };
};

export default useAction;
