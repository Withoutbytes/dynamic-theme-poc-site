/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";

const Header: React.FC = () => {
	return (
		<Head>
			<title>Poc nextjs</title>
			<meta name="description" content="Poc theme dynamic" />
			<link rel="icon" href="/favicon.ico" />
			<link rel="stylesheet" href="/api/theme_css" />
		</Head>
	);
};

export default Header;
