import Link from "next/link";

const Navbar = () => {
	return (
		<nav>
			<Link href="/">
				<a>home</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
			<Link href="/product/123">
				<a>Product</a>
			</Link>
		</nav>
	);
};

export default Navbar;
