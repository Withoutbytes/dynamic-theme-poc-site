import "../styles/globals.css";
import type { AppProps } from "next/app";
import DynamicTheme from "../components/DynamicTheme";
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SWRConfig
			value={{
				fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
			}}
		>
			<DynamicTheme>
				<Component {...pageProps} />
			</DynamicTheme>
		</SWRConfig>
	);
}

export default MyApp;
