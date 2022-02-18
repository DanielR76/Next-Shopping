import Navbar from "@components/Navbar";

const Layout: React.FC = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<footer>Aqí está el footer</footer>
		</>
	);
};

export default Layout;
