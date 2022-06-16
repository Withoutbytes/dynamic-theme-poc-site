import type { NextPage } from "next";
import Layout from "../components/Layout";

const Marketplace: NextPage = () => {
	return (
		<Layout>
			<div className="mx-auto my-auto font-bold text-center">
				<h1 className="text-2xl text-primary">Marketplace</h1>
				<div className="flex my-8 space-x-4">
					<span className="flex rounded-md h-36 w-36 bg-lime-600">
						<h1 className="mx-auto my-5 text-white">Pera</h1>
					</span>

					<span className="flex bg-yellow-500 rounded-md h-36 w-36">
						<h1 className="mx-auto my-5 text-white">Melão</h1>
					</span>

					<span className="flex rounded-md h-36 w-36 bg-lime-800">
						<h1 className="mx-auto my-5 text-white">Abacate</h1>
					</span>

					<span className="flex bg-red-800 rounded-md h-36 w-36">
						<h1 className="mx-auto my-5 text-white">Maçã</h1>
					</span>
				</div>
			</div>
		</Layout>
	);
};

export default Marketplace;
