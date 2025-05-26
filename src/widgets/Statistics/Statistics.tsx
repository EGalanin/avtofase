import { StatisticsCard } from "./StatisticsCard";

const statistics = [
    { prefix: "Более", value: 80, description: "Попадает в аварию" },
    { prefix: "Более", value: 49, description: "Скручен пробег" },
    { value: 60, description: "Более 4 собственников" },
    { prefix: "Более", value: 8, description: "Использовался в качестве такси" },
    { prefix: "Более", value: 3.5, description: "Имели ограничения рег. действий" },
    { prefix: "Более", value: 15, description: "Находятся в залоге у банков" },
];

export const Statistics = () => {
    return (
        <div className="mt-12">
            <h2 className="mb-8 text-center text-2xl font-bold">
                Статистика
                <br /> подержанных автомобилей
            </h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                {statistics.map((stat, index) => (
                    <StatisticsCard key={index} {...stat} />
                ))}
            </div>
        </div>
    );
};
