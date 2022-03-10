type InitialStateType = {
	cart: CartType[];
};

type CartType = {
	id: string | string[];
	name: string;
	quantity: number;
	image: string;
	price: number;
};
