// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../utils/database";

const TestTheme = {
	primary: "#27ae60",
	secondary: "#f1c40f",
	background: "#2c3e50",
	link: "#3498db",
};

const getThemeLocal = async () => {
	await new Promise((r) => setTimeout(r, 1000)); // Wait 3 second

	return TestTheme;
};

const getTheme = async () => {
	const theme = await database.db().collection("themes").findOne({});

	if (!theme) {
		throw new Error("Theme not found");
	}

	return theme.colors;
};
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	//res.setHeader("Cache-Control", "s-maxage=30"); // Cache for 30 seconds
	res.status(200).json(await getTheme());
}
