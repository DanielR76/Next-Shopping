import { useState, useEffect } from "react";
import CardAvo from "@components/CardAvo";

import type { NextPage } from "next";

const Home: NextPage = () => {
	const [product, setProduct] = useState<TProduct[]>([]);

	useEffect(() => {
		window
			.fetch("api/avo")
			.then((response) => response.json())
			.then((resp) => setProduct(resp.allEntries));
	}, []);

	return (
		<>
			{product?.map((element, id) => (
				<CardAvo
					key={id}
					name={element?.name}
					price={element?.price}
					image={element?.image}
				/>
			))}
		</>
	);
};

export default Home;
