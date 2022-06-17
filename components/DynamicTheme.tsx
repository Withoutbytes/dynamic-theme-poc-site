import { useEffect, useState } from "react";
import { Rings } from "react-loader-spinner";
import useSWR from "swr";
interface Props {
	children: React.ReactNode;
}

const DynamicTheme: React.FC<Props> = ({ children }) => {
	const [loaded, setLoaded] = useState(false);

	// const { data: themeData } = useSWR("/api/theme");

	// useEffect(() => {
	// 	let theme = themeData;
	// 	if (!themeData) {
	// 		const localStorageTheme = localStorage.getItem("theme");
	// 		if (!localStorageTheme) {
	// 			return;
	// 		}
	// 		console.log("localStorageTheme", localStorageTheme);

	// 		theme = JSON.parse(localStorageTheme);
	// 	}

	// 	const documentStyle = document.documentElement.style;
	// 	documentStyle.setProperty("--tw-color-primary", theme.primary);
	// 	documentStyle.setProperty("--tw-color-secondary", theme.secondary);
	// 	documentStyle.setProperty("--tw-color-background", theme.background);
	// 	documentStyle.setProperty("--tw-color-link", theme.link);

	// 	localStorage.setItem("theme", JSON.stringify(theme));
	// 	setLoaded(true);
	// }, [themeData]);

	// if (!loaded) {
	// 	return (
	// 		<div className="flex w-screen h-screen bg-[#1a1a1a]">
	// 			<div className="mx-auto my-auto">
	// 				<Rings />
	// 			</div>
	// 		</div>
	// 	);
	// }

	return <>{children}</>;
};

export default DynamicTheme;
