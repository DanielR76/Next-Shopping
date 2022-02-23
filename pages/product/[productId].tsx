import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const DinamicExample = () => {
	const [product, setProduct] = useState<TProduct>();
	const router = useRouter();
	const path = "http://localhost:3000/";
	const { productId } = router.query;

	useEffect(() => {
		fetch(`${path}api/avo/${productId}`)
			.then((response) => response.json())
			.then((resp) => setProduct(resp))
			.catch(console.log);
	}, [productId]);

	console.log(product);

	return (
		<main>
			<div>DinamicExample</div>
			<div>{product?.image}</div>
			<div>{product?.name}</div>
			<div>{product?.price}</div>
			<div>{product?.sku}</div>
			<div>{product?.attributes?.description}</div>
			<table>
				<thead>
					<tr>
						<th>Attributes</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Shape</td>
						<td>{product?.attributes?.shape}</td>
					</tr>
					<tr>
						<td>Hardiness</td>
						<td>{product?.attributes?.hardiness}</td>
					</tr>
					<tr>
						<td>Taste</td>
						<td>{product?.attributes?.taste}</td>
					</tr>
				</tbody>
			</table>
		</main>
	);
};

export default DinamicExample;
