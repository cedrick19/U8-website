import NotFoundPage from "@/pages/not-found/404";
import { Router } from "framework7/types";
import { webRoutes } from "./routes";

const appRoutes: Router.RouteParameters[] = [
    ...webRoutes,
    { path: "(.*)", component: NotFoundPage },
]

export default appRoutes