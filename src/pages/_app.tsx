import { AppProps } from "next/app";
import ProductsProvider from "../context/ProductsProvider";
import { NextUIProvider } from "@nextui-org/react";
import Layout from "../layouts/Layout";

import "styles/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ProductsProvider>
			<NextUIProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</NextUIProvider>
		</ProductsProvider>
	);
}

export default MyApp;
