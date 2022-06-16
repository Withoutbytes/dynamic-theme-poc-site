import Link from "next/link";

const Footer: React.FC = () => {
	return (
		<div className="mt-5 space-x-4 font-bold underline text-link">
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/marketplace">
				<a>Marketplace</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
		</div>
	);
};

export default Footer;
