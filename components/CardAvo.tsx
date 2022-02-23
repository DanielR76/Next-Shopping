import { Card, Grid } from "@nextui-org/react";

const CardAvo = ({ name, price, image }: TProduct) => {
	return (
		<section className="container-card">
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

export default CardAvo;
