import CardAvo from "@components/CardAvo";

export const getStaticProps = async () => {
	const response = await fetch("https://platzi-avo.vercel.app/api/avo");
	const { data: product }: TAPIAvoResponse = await response.json();
	return {
		props: {
			product,
		},
	};
};

const Home = ({ product }: { product: TProduct[] }) => {
	return (
		<main className="container">
			{product?.map((element, id) => (
				<CardAvo
					key={id}
					id={element?.id}
					name={element?.name}
					price={element?.price}
					image={element?.image}
				/>
			))}
		</main>
	);
};

export default Home;
