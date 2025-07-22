import {
	createRootRoute,
	createRoute,
	createRouter,
	Outlet,
	RouterProvider,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { HomePage, NotFoundPage, MeetPage, AboutPage } from "@pages/index";

const rootRoute = createRootRoute({
	component: () => <Outlet />,
});

const notFoundRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "*",
	component: NotFoundPage,
});

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: HomePage,
});

const meetRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/meet",
	component: MeetPage,
});

const aboutRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/about",
	component: AboutPage,
});

const routeTree = rootRoute.addChildren([
	indexRoute,
	notFoundRoute,
	meetRoute,
	aboutRoute,
]);

// Экспортируем роутер для использования в других частях приложения
// eslint-disable-next-line react-refresh/only-export-components
export const router = createRouter({
	routeTree,
	defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

export function Router() {
	const [isRouterReady, setIsRouterReady] = useState(false);

	useEffect(() => {
		router.update({});
		setIsRouterReady(true);
	}, []);

	if (!isRouterReady) {
		return null;
	}

	return <RouterProvider router={router} />;
}
