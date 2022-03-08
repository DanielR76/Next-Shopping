import React from "react";
import Link from "next/link";
import { Avocado, Basket } from "./SVGIcons";

export const Navbar = () => {
	return (
		<header>
			<nav className="nav">
				<section className="nav-section">
					<Avocado size="45" />
					<Link href="/">
						<a className="nav-anchor">Products</a>
					</Link>
				</section>
				<section className="nav-section">
					<Basket size="45" />
					<Link href="/shopping">
						<a className="nav-anchor basket">Shopping cart</a>
					</Link>
				</section>
			</nav>
		</header>
	);
};

export default React.memo(Navbar);
