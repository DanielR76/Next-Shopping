import Link from "next/link";
import { Avocado, Basket } from "./SVGIcons";

const Navbar = () => {
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
					<Link href="/shopping/123">
						<a className="nav-anchor">Shopping cart</a>
					</Link>
				</section>
			</nav>
		</header>
	);
};

export default Navbar;
