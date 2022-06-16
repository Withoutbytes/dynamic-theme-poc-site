// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const TestTheme = {
	primary: "#27ae60",
	secondary: "#f1c40f",
	background: "#2c3e50",
	link: "#3498db",
};

const getTheme = async () => {
	await new Promise((r) => setTimeout(r, 1000)); // Wait 3 second

	return TestTheme;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json(await getTheme());
}
