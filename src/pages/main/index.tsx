import type { FC } from "react";
import { Hero } from "@/widgets/Hero/Hero";
import { SearchForm } from "@/widgets/SearchForm/SearchForm";
import { Statistics } from "@/widgets/Statistics/Statistics";
import { UsedCarsSales } from "@/widgets/UsedCarsSales/UsedCarsSales";
import { Advantages } from "@/widgets/Advantages/Advantages";

const MainPage: FC = () => {
    return (
        <div className="mx-auto w-[380px]">
            <Hero />

            <SearchForm />

            <Statistics />

            <UsedCarsSales />

            <Advantages />
            <div className="mt-4 flex h-[200px] items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-500">
                Блок "Нам доверяют"
            </div>
            <div className="mt-4 flex h-[200px] items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-500">
                Блок "Ответы на частые вопросы"
            </div>
        </div>
    );
};

export const Component = MainPage;
export default MainPage;
