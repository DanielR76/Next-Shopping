import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Input, Button, Loading } from "@nextui-org/react";

import Image from "next/image";

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

	return (
		<main className="product">
			<section className="product-info">
				<img
					className="product-info--img"
					src={product?.image}
					alt="avocado-image"
				/>

				<div className="product-info--values">
					<h3>{product?.name}</h3>
					<p>{product?.price}</p>
					<span className="product-info--values--sku">{`SKU: ${product?.sku}`}</span>
					<div className="product-info--quantity">
						<Input type="number" size="xl" />
						<Button size="xl" color="success" auto shadow>
							{true ? (
								"Add to cart"
							) : (
								<Loading type="points" color="white" size="sm" />
							)}
						</Button>
					</div>
				</div>
			</section>
			<section className="product-description">
				<div className="product-description--text">
					<h3>About this avocado</h3>
					<p>{product?.attributes?.description}</p>
				</div>
				<table className="product-description--table">
					<thead>
						<tr>
							<th colSpan={2} className="table-top-left">
								Attributes
							</th>
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
			</section>
		</main>
	);
};

export default DinamicExample;
