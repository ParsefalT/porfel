import { Link } from "@tanstack/react-router";
import Cursor from "./Cursor";

interface Links {
	text: string;
	link: string;
	id: number;
}

const links: Links[] = [
	{ text: "Home", link: "/", id: 1 },
	{ text: "About", link: "/about", id: 2 },
	{ text: "Contacts", link: "/contacts", id: 3 },
];

const items = links.map((item) => (
	<li key={item.id}>
		<Link
			className="hover:text-violet-400 hover:scale-110 transition inline-block"
			activeProps={{
				style: {
					color: "var(--primary-light)",
					textShadow: "0px 0px 20px var(--primary-light)",
					display: "inline-block",
					transform: "scale(1.2)",
				},
			}}
			to={item.link}
		>
			{item.text}
		</Link>
	</li>
));

export const Header = () => {
	return (
		<header>
			<Cursor />
			<nav className="flex items-center justify-between py-4 px-[120px] border-b-[1px] border-purple-500 shadow-[2px_2px_15px_2px_purple]">
				<Link to="/" className="w-[260px]">
					<img src="/images/Parsefal.png" alt="logo" />
				</Link>

				<ul className="flex gap-6 list-none text-xl">{items}</ul>
			</nav>
		</header>
	);
};
