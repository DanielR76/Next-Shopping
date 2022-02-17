import { useRouter } from "next/router";

const DinamicExample = () => {
	const router = useRouter();
	return (
		<>
			<div>DinamicExample</div>
			<div>{router.query.productId}</div>
		</>
	);
};

export default DinamicExample;
