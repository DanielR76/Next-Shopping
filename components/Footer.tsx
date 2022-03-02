import React from "react";
import Link from "next/link";

export const Footer = () => {
	return (
		<footer>
			<div className="footer-container">
				<section>
					<h4>Nosotros</h4>
					<Link href="/about">
						<a>Conoce más</a>
					</Link>
				</section>
				<section>
					<h4>Servicios</h4>
					<Link href="/">
						<a>Todos los prductos</a>
					</Link>
				</section>
				<section>
					<h4>Hecho por</h4>
					<a href="https://github.com/DanielR76">
						Daniel <span className="footer-git" />
					</a>
				</section>
			</div>
		</footer>
	);
};

export default React.memo(Footer);
