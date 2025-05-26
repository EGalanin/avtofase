import type { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header/Header";
import { Footer } from "@/widgets/Footer/Footer";

export const MainLayout: FC<PropsWithChildren> = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="mx-auto max-w-[615px] px-4 py-8">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
