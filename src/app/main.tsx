import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { BrowserRouter } from "react-router";
import { router } from "./router";
import "./index.css";

async function enableMocking() {
	const { worker } = await import("@mocks/browser");
	return worker.start();
}

enableMocking().then(() => {
	createRoot(document.getElementById("root")!).render(
		<StrictMode>
			<BrowserRouter>
				<RouterProvider router={router} />
			</BrowserRouter>
		</StrictMode>
	);
});
