import type { NextPage } from "next";
import Layout from "../components/Layout";

const About: NextPage = () => {
	return (
		<Layout>
			<div className="mx-auto my-auto font-bold text-center">
				<h1 className="text-2xl text-primary">About</h1>
				<p className="text-secondary">This is a normal POC of dynamic theming</p>
			</div>
		</Layout>
	);
};

export default About;
