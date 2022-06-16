import Footer from "./Footer";
import Header from "./Header";

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen bg-background">
			<Header />
			<main className="flex flex-col flex-1">{children}</main>
			<div className="mx-auto mb-8">
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
