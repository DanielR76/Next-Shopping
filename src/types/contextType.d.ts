type InitialStateType = {
	cart: CartType[];
};

type CartType = {
	id: string;
	name: string;
	quantity: number;
	image: string;
	price: number;
};
