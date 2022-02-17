import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		window
			.fetch("api/avo")
			.then((response) => response.json())
			.then((resp) => setProduct(resp.allEntries));
	}, []);
	console.log(product);
	return (
		<div>
			<nav>
				<Link href="/navbar/Navbar">
					<a>Navbar</a>
				</Link>
				<Link href="/About">
					<a>about</a>
				</Link>
			</nav>
			{product?.map((element, id) => (
				<div key={id}>{element?.name}</div>
			))}
		</div>
	);
};

export default Home;
