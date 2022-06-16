import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";

const Home: NextPage = () => {
	return (
		<Layout>
			<div className="mx-auto my-auto font-bold text-center">
				<h1 className="text-2xl text-primary">Home</h1>
				<h1 className="text-xl text-primary">Text primary</h1>
				<h2 className="text-xl text-secondary">text secondary</h2>
				<Link href="/">
					<a className="underline text-link">link</a>
				</Link>
			</div>
		</Layout>
	);
};

export default Home;
