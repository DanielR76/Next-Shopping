import { useState, useEffect } from "react";

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
		<div>
			{product?.map((element, id) => (
				<div key={id}>
					<div>{element?.name}</div>
					<div>{element?.id}</div>
				</div>
			))}
		</div>
	);
};

export default Home;
