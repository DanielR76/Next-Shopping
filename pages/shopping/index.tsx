import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsProvider";

const CartPage = () => {
	const { productState } = useContext(ProductsContext);
	const handleRemove = () => {};

	return (
		<>
			<div>it`s hereee</div>
			{productState.cart?.map((element, index) => (
				<div key={index}>
					<div>{element.id}</div>
					<div>{element.quantity}</div>
				</div>
			))}
			<button onClick={handleRemove}>Create</button>
		</>
	);
};

export default CartPage;
