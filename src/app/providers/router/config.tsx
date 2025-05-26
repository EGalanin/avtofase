import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/widgets/layouts/MainLayout";
import type { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                lazy: () => import("@/pages/main"),
            },
            {
                path: "report",
                children: [
                    {
                        path: "search",
                        lazy: () => import("@/pages/report/search"),
                    },
                    {
                        path: "example",
                        lazy: () => import("@/pages/report/example"),
                    },
                    {
                        path: ":id",
                        lazy: () => import("@/pages/report/view"),
                    },
                ],
            },
            {
                path: "auth",
                children: [
                    {
                        path: "login",
                        lazy: () => import("@/pages/auth/login"),
                    },
                    {
                        path: "register",
                        lazy: () => import("@/pages/auth/register"),
                    },
                ],
            },
        ],
    },
];

export const router = createBrowserRouter(routes);
