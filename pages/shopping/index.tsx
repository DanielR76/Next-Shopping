import { useAction } from "../../hooks/useAction";

const CartPage = () => {
	const { addCart } = useAction();

	const handleAdd = () => {
		addCart({ id: "123", quantity: 5 });
	};

	return (
		<>
			<div>it`s hereee</div>
			<button onClick={handleAdd}>Create</button>
		</>
	);
};

export default CartPage;
