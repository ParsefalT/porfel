import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<section className="flex items-center justify-center flex-col text-center relative h-[648px]">
				<img
					src="/images/header-bg.png"
					alt=""
					className="absolute animate-spin-slow z-[-1]"
				/>
				<div className="flex flex-col gap-14">
					<h1 className="text-5xl">
						<strong>
							Hi, my name is <em className="text-violet-400 drop-shadow-[3px_3px_4px_purple]">Sergei</em>
						</strong>
						<br />a Web developer
					</h1>
					<p className="text-4xl">
						with passion for learning and creating.
					</p>
				</div>
				{/* <Link download={'public'}/> */}
			</section>

			<section className="flex items-center justify-center flex-col mt-5">
				<h2 className="text-2xl">Frontend</h2>
				<div className="mt-4 text-violet-300 text-xl w-[400px]">
					HTML, CSS, SCSS/SASS, BootStrap, JavaScript, TypeScript,
					React, Redux, NPM, MaterialUI, TailwindCSS, Ant Design,
					StyledComponents, StyleX
				</div>

				{/* <li className={styles["content-list__item"]}>
						<HTag type="h2">Backend</HTag>
						<p>NodeJS, MySQL, MongoDB, PHP</p>
					</li> */}
			</section>
		</>
	);
}
