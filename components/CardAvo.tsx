import React from "react";
import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";

const CardAvo = ({ id, name, price, image }: TProduct) => {
	const router = useRouter();

	const goToProduct = () => {
		router.push(`product/${id}`);
	};

	return (
		<section className="container-card" onClick={goToProduct}>
			<Card bordered shadow={true} hoverable>
				<Card.Image src={image} width="100%" height={250} css={{ p: 0 }} />
				<Card.Footer>
					<Grid direction="column">
						<h3 className="card-footer--title">{name}</h3>
						<span className="card-footer--price">{price}</span>
					</Grid>
				</Card.Footer>
			</Card>
		</section>
	);
};

export default React.memo(CardAvo);
