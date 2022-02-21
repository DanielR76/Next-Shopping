import { Card } from "@nextui-org/react";

const CardAvo = ({ name, price, image }: TProduct) => {
	return (
		<Card bordered shadow={false} hoverable css={{ mw: "400px" }}>
			<Card.Image src={image} width="100%" height={250} css={{ p: 0 }} />
			<Card.Footer>
				<p>{name}</p>
				<p>{price}</p>
			</Card.Footer>
		</Card>
	);
};

export default CardAvo;
