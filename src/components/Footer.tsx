import React from "react";
import Link from "next/link";

export const Footer = () => {
	return (
		<footer>
			<div className="footer-container">
				<section>
					<h4>About us</h4>
					<Link href="/about">
						<a>Know more</a>
					</Link>
				</section>
				<section>
					<h4>Services</h4>
					<Link href="/">
						<a>All prducts</a>
					</Link>
				</section>
				<section>
					<h4>Made by</h4>
					<a href="https://github.com/DanielR76">
						Daniel Rodriguez <span className="footer-git" />
					</a>
				</section>
			</div>
		</footer>
	);
};

export default React.memo(Footer);
