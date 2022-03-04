import { useRef, useState, useCallback } from "react";
import { useRouter } from "next/router";
import { Input, Button } from "@nextui-org/react";

import { useAction } from "../../hooks/useAction";
import { GetStaticProps, GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
	const response = await fetch("https://platzi-avo.vercel.app/api/avo");
	const { data }: TAPIAvoResponse = await response.json();
	const paths = data.map(({ id }) => ({ params: { productId: id } }));
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const response = await fetch(
		`https://platzi-avo.vercel.app/api/avo/${params?.productId}`
	);
	const product: TProduct = await response.json();
	return {
		props: {
			product,
		},
	};
};

const DinamicExample = ({ product }) => {
	const [quantity, setQuantity] = useState<number>(1);
	const refInput = useRef<HTMLInputElement>(null);

	const router = useRouter();
	const { addCart } = useAction();
	const { productId } = router.query;

	const handleChange = useCallback(() => {
		setQuantity(
			Number(refInput.current.value) > 0 ? Number(refInput.current.value) : 1
		);
	}, [refInput]);

	const handleSubmit = () => {
		addCart({ id: productId, quantity: quantity });
	};

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
						<Input
							type="number"
							size="xl"
							ref={refInput}
							value={String(quantity)}
							onChange={handleChange}
						/>
						<Button
							size="xl"
							color="success"
							auto
							shadow
							onClick={handleSubmit}
						>
							Add to cart
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
