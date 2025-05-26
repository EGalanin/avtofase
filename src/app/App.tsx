import { RouterProvider } from "react-router-dom";
import { router } from "@/app/providers/router/config";

export function App() {
    return <RouterProvider router={router} />;
}
