import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import type { NextPage } from "next";

const Product: NextPage = () => {
	const [product, setProduct] = useState<TProduct>();
	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		id &&
			window
				.fetch(`api/avo/${id}`)
				.then((response) => response.json())
				.then((resp) => setProduct(resp));
	}, [id]);

	return (
		<>
			<div>Product</div>
			<div>{product?.name}</div>
			<div>{product?.price}</div>
			<div>{product?.sku}</div>
		</>
	);
};

export default Product;
