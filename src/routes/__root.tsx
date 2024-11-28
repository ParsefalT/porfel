import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Header, Footer } from "../components";

export const Route = createRootRoute({
	component: () => (
		<>
			<Header />
			<main className="flex-1">
				<Outlet />
			</main>
			<Footer />
		</>
	),
});
