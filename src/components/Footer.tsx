const date = new Date();
const formatter = new Intl.DateTimeFormat("ru-RU", {
	year: "numeric",
});

export const Footer = (): JSX.Element => {
	return (
		<footer className="flex items-center justify-center py-2">
			<ul></ul>
			<p className="text-purple-500 drop-shadow-[0px_0px_3px_purple]">
				© {formatter.format(date)} - web developer
			</p>
		</footer>
	);
};
