type InitialStateType = {
	cart: CartType[];
};

type CartType = {
	id: string | string[];
	quantity: number;
};
