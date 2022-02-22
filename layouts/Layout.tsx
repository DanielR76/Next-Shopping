import { Navbar, Footer } from "../components";

const Layout: React.FC = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
