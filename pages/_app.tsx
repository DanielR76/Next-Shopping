import { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import Layout from "../layouts/Layout";

import "styles/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<NextUIProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</NextUIProvider>
	);
}

export default MyApp;
