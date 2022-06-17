// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../utils/database";

const getTheme = async () => {
	const theme = await database.db().collection("themes").findOne({});

	if (!theme) {
		throw new Error("Theme not found");
	}
	// theme.colors;
	return `
    :root {
            --tw-color-primary: ${theme.colors.primary} !important;
            --tw-color-secondary: ${theme.colors.secondary} !important;
            --tw-color-background: ${theme.colors.background} !important;
            --tw-color-link: ${theme.colors.link} !important;
        }

    `;
};
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	res.setHeader("Cache-Control", "s-maxage=2"); // Cache for 2 seconds
	res.setHeader("Content-Type", "text/css");
	res.status(200).end(await getTheme());
}
