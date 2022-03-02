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

	const deleteCart = (payload: CartType) => {
		dispatch({
			type: Types.Remove,
			payload,
		});
	};

	return { addCart, deleteCart };
};

export default useAction;
